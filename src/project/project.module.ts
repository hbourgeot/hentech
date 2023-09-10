import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { EmployeeProjectService } from 'src/employee-project/employeeProject.service';
import { projectProviders } from './project.providers';
import { DatabaseModule } from 'src/database/database.module';
import { EmployeeProjectModule } from 'src/employee-project/employee-project.module';

@Module({
  imports: [DatabaseModule, EmployeeProjectModule],
  controllers: [ProjectController],
  providers: [ProjectService, EmployeeProjectService, ...projectProviders],
})
export class ProjectModule {}
