import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// Create
export class CreateTaskDto {
  id?: number = 0;
  @ApiProperty()
  description!: string;

  @ApiProperty()
  estimatedDuration!: string;

  @ApiProperty()
  actualDuration!: string;

  @ApiProperty()
  estimatedDate!: Date;

  @ApiProperty()
  actualDate!: Date;

  @ApiProperty()
  type!: string;

  @ApiProperty()
  projectId!: number;
}

// Update
export class UpdateTaskDto {
  @ApiPropertyOptional()
  description?: string;
  @ApiPropertyOptional()
  estimatedDuration?: string;
  @ApiPropertyOptional()
  actualDuration?: string;
  @ApiPropertyOptional()
  estimatedDate?: Date;
  @ApiPropertyOptional()
  actualDate?: Date;
  @ApiPropertyOptional()
  type?: string;
  @ApiPropertyOptional()
  projectId?: number;
}

export class SearchTaskDto {
  @ApiPropertyOptional()
  id?: number;

  @ApiPropertyOptional()
  description?: string;

  @ApiPropertyOptional()
  estimatedDuration?: string;

  @ApiPropertyOptional()
  actualDuration?: string;

  @ApiPropertyOptional()
  estimatedDate?: Date;

  @ApiPropertyOptional()
  actualDate?: Date;

  @ApiPropertyOptional()
  type?: string;

  @ApiPropertyOptional()
  projectId?: number;
}