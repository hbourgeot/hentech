import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// Create
export class CreateProjectDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  comercialDesignation!: string;

  @ApiProperty()
  type!: string;

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
  type?: string;
  
  @ApiPropertyOptional()
  leader?: {
    id: number;
  };
}

export class ProjectSearchDTO {
  @ApiPropertyOptional()
  id?: number;

  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  comercialDesignation?: string;

  @ApiPropertyOptional()
  status?: string;

  @ApiPropertyOptional()
  type?: string;

  @ApiPropertyOptional()
  leaderId?: number;
}
