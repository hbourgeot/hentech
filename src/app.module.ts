import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { VersionModule } from './version/version.module';
import { DocumentModule } from './document/document.module';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    EmployeeModule,
    ProjectModule,
    TaskModule,
    DocumentModule,
    VersionModule,
    AuthModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
