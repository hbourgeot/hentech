import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { VersionModule } from './version/version.module';
import { DocumentModule } from './document/document.module';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    EmployeeModule,
    ProjectModule,
    TaskModule,
    DocumentModule,
    VersionModule,
    AuthModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
