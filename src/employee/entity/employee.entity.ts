import { EmployeeProject } from 'src/employeeProject.entity';
import { Project } from 'src/project/entity/project.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
@Entity()
export class Employee {
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 200 })
  address: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 50 })
  phoneNumber: string;

  @OneToMany(() => Project, (project) => project.leader)
  ledProjects: Project[];

  @ManyToMany(() => Project)
  @JoinTable({
    name: 'employee_project', // corresponds to EmployeeProject model
    joinColumn: { name: 'employeeId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'projectId', referencedColumnName: 'id' },
  })
  employeeProjects: EmployeeProject[];
}
