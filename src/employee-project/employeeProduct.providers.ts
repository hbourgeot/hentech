import { DataSource } from 'typeorm';
import { EmployeeProject } from './employeeProject.entity';

export const employeeProjectProviders = [
  {
    provide: 'EMPLOYEE_PROJECT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EmployeeProject),
    inject: ['DATA_SOURCE'],
  },
];
