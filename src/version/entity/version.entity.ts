import { Document } from 'src/document/entity/document.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Version {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  date: Date;

  @Column({ length: 200 })
  description: string;

  @Column({ length: 50 })
  tag: string;

  @ManyToOne(() => Document, (document) => document.versions)
  document: Document;
}
