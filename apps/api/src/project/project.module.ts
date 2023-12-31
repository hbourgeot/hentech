import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { EmployeeProjectService } from 'src/employee-project/employeeProject.service';
import { EmployeeProjectModule } from 'src/employee-project/employee-project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entity/project.entity';
import { Employee } from 'src/employee/entity/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project, Employee]),
    EmployeeProjectModule,
  ],
  controllers: [ProjectController],
  providers: [ProjectService, EmployeeProjectService],
})
export class ProjectModule {}
