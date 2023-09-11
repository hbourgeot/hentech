import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

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
}
