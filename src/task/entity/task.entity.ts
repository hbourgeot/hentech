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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  description: string;

  @Column({ length: 50 })
  estimatedDuration: string;

  @Column({ length: 50 })
  actualDuration: string;

  @Column({ type: 'datetime' })
  estimatedDate: Date;

  @Column({ type: 'datetime' })
  actualDate: Date;

  @Column({ length: 50 })
  type: string;

  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;

  @OneToMany(() => Document, (document) => document.task)
  documents: Document[];
}
