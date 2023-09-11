import { Module } from '@nestjs/common';
import { EmployeeProjectService } from './employeeProject.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeProject } from './employeeProject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeProject])],
  providers: [EmployeeProjectService],
  exports: [TypeOrmModule]
})
export class EmployeeProjectModule {}
