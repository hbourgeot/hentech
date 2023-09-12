import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

// Create
export class CreateVersionDto {
  id: number = 0;
  @ApiProperty()
  date: Date;
  @ApiProperty()
  description: string;
  @ApiProperty()
  tag: string;
  @ApiProperty()
  documentId: number;
}

// Update
export class UpdateVersionDto {
  @ApiPropertyOptional()
  date?: Date;
  @ApiPropertyOptional()
  description?: string;
  @ApiPropertyOptional()
  tag?: string;
  @ApiPropertyOptional()
  documentId?: number;
}

// Delete no necesita DTO, el ID es suficiente
