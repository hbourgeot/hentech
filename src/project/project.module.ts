import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { EmployeeProjectService } from 'src/employeeProject.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, EmployeeProjectService],
})
export class ProjectModule {}
