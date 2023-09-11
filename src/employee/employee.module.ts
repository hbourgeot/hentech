import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeProjectService } from 'src/employee-project/employeeProject.service';
import { EmployeeProjectModule } from 'src/employee-project/employee-project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), EmployeeProjectModule],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    EmployeeProjectService,
  ],
  exports: [TypeOrmModule]
})
export class EmployeeModule {}
