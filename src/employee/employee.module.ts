import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeProjectService } from 'src/employeeProject.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeProjectService, PrismaService],
})
export class EmployeeModule {}
