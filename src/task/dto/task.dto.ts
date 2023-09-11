import { ApiProperty } from '@nestjs/swagger';

// Create
export class CreateTaskDto {
  id?: number = 0;
  @ApiProperty()
  description: string;
  @ApiProperty()
  estimatedDuration: string;
  @ApiProperty()
  actualDuration: string;
  @ApiProperty()
  estimatedDate: Date;
  @ApiProperty()
  actualDate: Date;
  @ApiProperty()
  type: string;
  @ApiProperty()
  projectId: number;
}

// Update
export class UpdateTaskDto {
  description?: string;
  estimatedDuration?: string;
  actualDuration?: string;
  estimatedDate?: Date;
  actualDate?: Date;
  type?: string;
  projectId?: number;
}

// Delete no necesita DTO, el ID es suficiente
