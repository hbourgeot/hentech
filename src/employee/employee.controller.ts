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
import { ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { Employee } from '@prisma/client';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() employee: CreateEmployeeDto): Promise<Employee> {
    return await this.employeeService.create({ ...employee });
  }

  @Get(':id')
  async getEmployee(@Param('id') id: number): Promise<Employee | null> {
    return await this.employeeService.getOne(id);
  }

  @Get()
  async getEmployees(): Promise<Employee[]> {
    return await this.employeeService.getAll();
  }

  @Patch(':id')
  async updateEmployee(
    @Param('id') id: number,
    @Body() updatedEmployee: UpdateEmployeeDto,
  ): Promise<Employee> {
    const employee = (await this.employeeService.getOne(id)) as Employee;
    return await this.employeeService.update(employee, { ...updatedEmployee });
  }
}
