// Create
export class CreateDocumentDto {
  readonly specificationDocument: string;
  readonly sourceCode: string;
  readonly description: string;
  readonly type: string;
  readonly taskId: number;
}

// Update
export class UpdateDocumentDto {
  specificationDocument?: string;
  sourceCode?: string;
  description?: string;
  type?: string;
  taskId?: number;
}

// Delete no necesita DTO, el ID es suficiente
