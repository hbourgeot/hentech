import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Employee } from './employee/entity/employee.entity';
import { Project } from './project/entity/project.entity';

@Entity('employee_project')
export class EmployeeProject {
  @PrimaryColumn()
  employeeId: number;

  @PrimaryColumn()
  projectId: number;

  @ManyToOne(() => Employee)
  employee: Employee;

  @ManyToOne(() => Project)
  project: Project;
}
