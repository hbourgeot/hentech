import { Employee } from 'src/employee/entity/employee.entity';
import { Project } from 'src/project/entity/project.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';

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
