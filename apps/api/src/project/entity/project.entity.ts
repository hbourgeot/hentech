import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EmployeeProject } from 'src/employee-project/employeeProject.entity';
import { Employee } from 'src/employee/entity/employee.entity';
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
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty()
  @Column({ length: 50 })
  name!: string;

  @ApiProperty()
  @Column({ length: 50 })
  comercialDesignation!: string;

  @ApiProperty()
  @Column({ length: 50 })
  status!: string;

  @Column({length: 50, nullable: true})
  type!: string;

  @ApiProperty({ type: () => Employee })
  @ManyToOne(() => Employee, (employee) => employee.ledProjects)
  leader!: Employee;

  @ApiPropertyOptional({ type: Task, isArray: true })
  @OneToMany(() => Task, (task) => task.project)
  tasks?: Task[];

  @ApiProperty({ type: () => Employee, isArray: true })
  @ManyToMany(() => Employee)
  @JoinTable({
    name: 'employee_project',
    joinColumn: { name: 'projectId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'employeeId', referencedColumnName: 'id' },
  })
  employees!: EmployeeProject[];
}
