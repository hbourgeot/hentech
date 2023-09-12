import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'src/document/entity/document.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Version {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'timestamp with time zone' })
  date: Date;

  @ApiProperty()
  @Column({ length: 200 })
  description: string;

  @ApiProperty()
  @Column({ length: 50 })
  tag: string;

  @ApiProperty({ type: () => Document })
  @ManyToOne(() => Document, (document) => document.versions)
  document?: Document;
}
