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
  @ApiProperty()
  id!: number;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  comercialDesignation!: string;

  @ApiProperty()
  status!: string;

  @ApiProperty()
  type!: string;

  @ApiProperty()
  leader!: {
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
  leaderId?: string;
}
