import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

// Create
export class CreateDocumentDto {
  id: number = 0;
  @ApiProperty()
  specificationDocument!: string;
  @ApiProperty()
  sourceCode!: string;
  @ApiProperty()
  description!: string;
  @ApiProperty()
  type!: string;
  @ApiProperty()
  taskId!: number;
}

// Update
export class UpdateDocumentDto {
  @ApiPropertyOptional()
  specificationDocument?: string;
  @ApiPropertyOptional()
  sourceCode?: string;
  @ApiPropertyOptional()
  description?: string;
  @ApiPropertyOptional()
  type?: string;
  @ApiPropertyOptional()
  taskId?: number;
}

// Delete no necesita DTO, el ID es suficiente
