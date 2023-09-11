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
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { Employee } from './entity/employee.entity';
import { DeleteResult } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { EmployeeProjectService } from 'src/employee-project/employeeProject.service';
import { EmployeeProject } from 'src/employee-project/employeeProject.entity';
import { Project } from 'src/project/entity/project.entity';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService, private readonly employeeProjectService: EmployeeProjectService) {}

  @ApiOkResponse({ type: Employee })
  @Post()
  async createEmployee(@Body() employee: CreateEmployeeDto): Promise<Employee> {
    const password = await bcrypt.hash(employee.password, 10);
    employee.password = password;
    return await this.employeeService.create({ ...employee });
  }

  @ApiOkResponse({ type: Employee })
  @ApiBadRequestResponse({ type: undefined, description: 'Bad Request' })
  @ApiNotFoundResponse({ type: undefined, description: 'Employee Not Found' })
  @Get(':id')
  async getEmployee(@Param('id') stringId: string): Promise<Employee | null> {
    const id = Number(+stringId);
    return await this.employeeService.getOne(id);
  }

  @ApiOkResponse({ type: Employee, isArray: true })
  @Get()
  async getEmployees(): Promise<Employee[]> {
    return await this.employeeService.getAll();
  }

  @ApiOkResponse({ type: Employee })
  @Patch(':id')
  async updateEmployee(
    @Param('id') stringId: string,
    @Body() updatedEmployee: UpdateEmployeeDto,
  ): Promise<Employee> {
    const id = Number(+stringId);
    const employee = (await this.employeeService.getOne(id)) as Employee;
    return await this.employeeService.update(
      { ...employee },
      { ...updatedEmployee },
    );
  }

  @ApiOkResponse({ type: Employee })
  @Delete(':id')
  async deleteEmployee(@Param('id') stringId: string): Promise<DeleteResult> {
    const id = Number(+stringId);
    return await this.employeeService.del({ id });
  }

  @Get(':id/projects')
  async getEmployeeInProjects(@Param('id') id: string) {
    return await this.employeeProjectService.getAll(0, 100, { employeeId: Number(+id) }, {project: {leader: true}, employee: false}, {project:{id:true,comercialDesignation:true,name:true,status:true,tasks: true,leader:{address:true,email:true,id:true,lastName:true,name:true,phoneNumber:true,password:false}}});
  }

  @Post('addToProject')
  async addToProject(@Query('employee') employee: number, @Query('project') project: number) {
    const empPro = new EmployeeProject()
    empPro.employeeId = employee;
    empPro.employee = new Employee()
    empPro.employee.id = employee;

    empPro.projectId = project;
    empPro.project = new Project()
    empPro.project.id = project;
    return this.employeeProjectService.create(empPro);
  }
}
