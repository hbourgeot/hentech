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
import {
  CreateEmployeeDto,
  GetEmployeeDTO,
  UpdateEmployeeDto,
} from './dto/employee.dto';
import { Employee } from '@prisma/client';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiOkResponse({ type: GetEmployeeDTO })
  @Post()
  async createEmployee(@Body() employee: CreateEmployeeDto): Promise<Employee> {
    return await this.employeeService.create({ ...employee });
  }

  @ApiOkResponse({ type: GetEmployeeDTO })
  @ApiBadRequestResponse({ type: undefined, description: 'Bad Request' })
  @ApiNotFoundResponse({ type: undefined, description: 'Employee Not Found' })
  @Get(':id')
  async getEmployee(
    @Param('id') id: string | number,
  ): Promise<Employee | null> {
    id = Number(+id);
    return await this.employeeService.getOne(id);
  }

  @ApiOkResponse({ type: GetEmployeeDTO, isArray: true })
  @Get()
  async getEmployees(): Promise<Employee[]> {
    return await this.employeeService.getAll();
  }

  @ApiOkResponse({ type: GetEmployeeDTO })
  @Patch(':id')
  async updateEmployee(
    @Param('id') id: string | number,
    @Body() updatedEmployee: UpdateEmployeeDto,
  ): Promise<Employee> {
    id = Number(+id);
    const employee = (await this.employeeService.getOne(id)) as Employee;
    return await this.employeeService.update(employee, { ...updatedEmployee });
  }

  @ApiOkResponse({ type: GetEmployeeDTO })
  @Delete(':id')
  async deleteEmployee(@Param() id: string | number): Promise<Employee> {
    id = Number(+id);
    return await this.employeeService.del(id);
  }
}
