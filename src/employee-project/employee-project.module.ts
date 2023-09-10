import { Module } from '@nestjs/common';
import { EmployeeProjectService } from './employeeProject.service';
import { employeeProjectProviders } from './employeeProduct.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [EmployeeProjectService, ...employeeProjectProviders],
  exports: [...employeeProjectProviders],
})
export class EmployeeProjectModule {}
