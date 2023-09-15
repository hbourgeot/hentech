import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Task } from 'src/task/entity/task.entity';
import { Version } from 'src/version/entity/version.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Document {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty()
  @Column({ length: 200 })
  specificationDocument!: string;

  @ApiProperty()
  @Column({ length: 200 })
  sourceCode!: string;

  @ApiProperty()
  @Column({ length: 200 })
  description!: string;

  @ApiProperty()
  @Column({ length: 50 })
  type!: string;

  @ApiProperty({ type: () => Task })
  @ManyToOne(() => Task, (task) => task.documents)
  task?: Task;

  @ApiProperty({ type: () => Version, isArray: true })
  @OneToMany(() => Version, (version) => version.document)
  versions?: Version[];
}
