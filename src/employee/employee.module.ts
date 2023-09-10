import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeProjectService } from 'src/employee-project/employeeProject.service';
import { employeeProviders } from './employee.provider';
import { employeeProjectProviders } from 'src/employee-project/employeeProduct.providers';
import { DatabaseModule } from 'src/database/database.module';
import { EmployeeProjectModule } from 'src/employee-project/employee-project.module';

@Module({
  imports: [DatabaseModule, EmployeeProjectModule],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    EmployeeProjectService,
    ...employeeProviders,
    ...employeeProjectProviders,
  ],
})
export class EmployeeModule {}
