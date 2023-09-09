import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeProjectService } from 'src/employeeProject.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeProjectService],
})
export class EmployeeModule {}
