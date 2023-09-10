import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Task } from 'src/task/entity/task.entity';
import { Version } from 'src/version/entity/version.entity';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  specificationDocument: string;

  @Column({ length: 200 })
  sourceCode: string;

  @Column({ length: 200 })
  description: string;

  @Column({ length: 50 })
  type: string;

  @ManyToOne(() => Task, (task) => task.documents)
  task: Task;

  @OneToMany(() => Version, (version) => version.document)
  versions: Version[];
}
