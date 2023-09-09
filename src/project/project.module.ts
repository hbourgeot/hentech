import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { EmployeeProjectService } from 'src/employeeProject.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, EmployeeProjectService, PrismaService],
})
export class ProjectModule {}
