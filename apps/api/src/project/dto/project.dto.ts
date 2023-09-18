import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// Create
export class CreateProjectDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  comercialDesignation!: string;

  @ApiProperty()
  status!: string;

  @ApiProperty()
  leaderId!: number;
}

// Update
export class UpdateProjectDto {
  @ApiPropertyOptional()
  name?: string;
  @ApiPropertyOptional()
  comercialDesignation?: string;
  @ApiPropertyOptional()
  status?: string;
  @ApiPropertyOptional()
  leader?: {
    id: number;
  };
}

// Delete no necesita DTO, el ID es suficiente
