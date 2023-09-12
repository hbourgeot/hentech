import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'src/document/entity/document.entity';
import { Project } from 'src/project/entity/project.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Task {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 200 })
  description: string;

  @ApiProperty()
  @Column({ length: 50 })
  estimatedDuration: string;

  @ApiProperty()
  @Column({ length: 50 })
  actualDuration: string;

  @ApiProperty()
  @Column({ type: 'timestamp with time zone' })
  estimatedDate: Date;

  @ApiProperty()
  @Column({ type: 'timestamp with time zone' })
  actualDate: Date;

  @ApiProperty()
  @Column({ length: 50 })
  type: string;

  @ApiProperty({ type: () => Project })
  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;

  @ApiProperty({ type: () => Document, isArray: true })
  @OneToMany(() => Document, (document) => document.task)
  documents: Document[];
}
