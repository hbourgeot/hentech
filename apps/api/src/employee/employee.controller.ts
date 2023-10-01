import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateEmployeeDto, SearchEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { Employee, Role } from './entity/employee.entity';
import { DeleteResult, FindOptionsWhere } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { EmployeeProjectService } from 'src/employee-project/employeeProject.service';
import { EmployeeProject } from 'src/employee-project/employeeProject.entity';
import { Project } from 'src/project/entity/project.entity';
import { RoleService } from './role.service';

@ApiTags('employee')
@Controller('employees')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly employeeProjectService: EmployeeProjectService,
    private readonly roleService: RoleService,
  ) {}

  @ApiOkResponse({ type: Employee })
  @Post()
  async createEmployee(@Body() employee: CreateEmployeeDto): Promise<Employee> {
    const password = await bcrypt.hash(employee.password, 10);
    employee.password = password;
    employee.role = new Role();
    employee.role.id = employee.roleId;
    return await this.employeeService.create({ ...employee });
  }

  @ApiOkResponse({ type: Employee })
  @ApiBadRequestResponse({ type: undefined, description: 'Bad Request' })
  @ApiNotFoundResponse({ type: undefined, description: 'Employee Not Found' })
  @Get('emp/:id')
  async getEmployee(@Param('id') stringId: string): Promise<Employee | null> {
    const id = Number(+stringId);
    return await this.employeeService.getOne(id);
  }

  @ApiOkResponse({ type: Employee, isArray: true })
  @Get()
  async getEmployees(): Promise<Employee[]> {
    return await this.employeeService.getAll();
  }

  @ApiOkResponse({ type: Role, isArray: true })
  @Get('roles')
  async getRoles(): Promise<Role[]> {
    return await this.roleService.getAll();
  }

  @ApiOkResponse({ type: Employee })
  @Patch('emp/:id')
  async updateEmployee(
    @Param('id') stringId: string,
    @Body() updatedEmployee: UpdateEmployeeDto,
  ): Promise<Employee> {
    const id = Number(+stringId);
    const employee = (await this.employeeService.getOne(id)) as Employee;

    updatedEmployee.role = new Role();
    updatedEmployee.role.id = updatedEmployee.roleId ?? employee.role.id;

    delete updatedEmployee.roleId;
    return await this.employeeService.update(
      { ...employee },
      { ...updatedEmployee },
    );
  }

  @ApiOkResponse({ type: Employee })
  @Delete('emp/:id')
  async deleteEmployee(@Param('id') stringId: string): Promise<DeleteResult> {
    const id = Number(+stringId);
    return await this.employeeService.del({ id });
  }

  @Post('createRole')
  async createRole(@Query('role') role: string) {
    return await this.roleService.create({ id: 0, role });
  }

  @Get(':emp/id/projects')
  async getEmployeeInProjects(@Param('id') id: string) {
    return await this.employeeProjectService.getAll(
      0,
      100,
      { employeeId: Number(+id) },
      { project: { leader: true, tasks: true }, employee: false },
      {
        project: {
          id: true,
          comercialDesignation: true,
          name: true,
          status: true,
          tasks: true,
          leader: {
            address: true,
            email: true,
            id: true,
            lastName: true,
            name: true,
            phoneNumber: true,
            password: false,
          },
        },
      },
    );
  }

  @Post('addToProject')
  async addToProject(
    @Query('employee') employee: number,
    @Query('project') project: number,
  ) {
    const empPro = new EmployeeProject();
    empPro.employeeId = employee;
    empPro.employee = new Employee();
    empPro.employee.id = employee;

    empPro.projectId = project;
    empPro.project = new Project();
    empPro.project.id = project;
    return this.employeeProjectService.create(empPro);
  }

  @Get('search')
  async searchEmployees(@Query() search: SearchEmployeeDto) {
    let employee: FindOptionsWhere<Employee> = {
      address: search.address,
      email: search.email,
      id: search.id,
      lastName: search.lastName,
      name: search.name,
      phoneNumber: search.phoneNumber,
      role: { id: search.roleId },
    };

    return await this.employeeService.getAll(undefined, undefined, employee);
  }
}
