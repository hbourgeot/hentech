import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EmployeeProject } from 'src/employee-project/employeeProject.entity';
import { Project } from 'src/project/entity/project.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
@Entity()
export class Employee {
  @ApiProperty()
  @PrimaryColumn({ type: 'int' })
  id: number;

  @ApiProperty()
  @Column({ length: 50 })
  name: string;

  @ApiProperty()
  @Column({ length: 50 })
  lastName: string;

  @ApiProperty()
  @Column({ length: 200 })
  address: string;

  @ApiProperty()
  @Column({ length: 100, unique: true })
  email: string;

  @ApiProperty()
  @Column({ length: 50 })
  phoneNumber: string;

  @ApiPropertyOptional({ type: Project, isArray: true })
  @OneToMany(() => Project, (project) => project.leader)
  ledProjects?: Project[];

  @ApiPropertyOptional({ type: () => Project, isArray: true })
  @ManyToMany(() => Project)
  @JoinTable({
    name: 'employee_project', // corresponds to EmployeeProject model
    joinColumn: { name: 'employeeId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'projectId', referencedColumnName: 'id' },
  })
  employeeProjects?: EmployeeProject[];
}
