import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { VersionModule } from './version/version.module';
import { DocumentModule } from './document/document.module';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';
import { DatabaseModule } from './database/database.module';
import { EmployeeProjectModule } from './employee-project/employee-project.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EmployeeModule,
    ProjectModule,
    TaskModule,
    DocumentModule,
    VersionModule,
    AuthModule,
    DatabaseModule,
    EmployeeProjectModule,
    ConfigModule.forRoot({ expandVariables: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
