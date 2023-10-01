import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DocumentModule } from './document/document.module';
import { EmployeeProjectModule } from './employee-project/employee-project.module';
import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { VersionModule } from './version/version.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join, resolve } from 'path';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      isGlobal: true,
      envFilePath: resolve(__dirname, '../.env'),
    }),
    EmployeeModule,
    ProjectModule,
    TaskModule,
    DocumentModule,
    VersionModule,
    AuthModule,
    EmployeeProjectModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DBHOST') ?? '',
        port: parseInt(configService.get('DBPORT') as string),
        username: configService.get('DBUSER'),
        password: configService.get('DBPASS'),
        database: configService.get('DBNAME'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ClientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
