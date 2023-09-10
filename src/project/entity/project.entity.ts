import { Employee } from 'src/employee/entity/employee.entity';
import { EmployeeProject } from 'src/employeeProject.entity';
import { Task } from 'src/task/entity/task.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  comercialDesignation: string;

  @Column({ length: 50 })
  status: string;

  @ManyToOne(() => Employee, (employee) => employee.ledProjects)
  leader: Employee;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];

  @ManyToMany(() => Employee)
  @JoinTable({
    name: 'employee_project', // corresponds to EmployeeProject model
    joinColumn: { name: 'projectId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'employeeId', referencedColumnName: 'id' },
  })
  employeeProjects: EmployeeProject[];
}
