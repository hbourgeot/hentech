import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeProjectService } from 'src/employee-project/employeeProject.service';
import { EmployeeProjectModule } from 'src/employee-project/employee-project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee, Role } from './entity/employee.entity';
import { RoleService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Role]), EmployeeProjectModule],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    EmployeeProjectService,
    RoleService
  ],
  exports: [TypeOrmModule]
})
export class EmployeeModule {}
