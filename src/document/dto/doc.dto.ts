// Create
export class CreateDocumentDto {
  specificationDocument: string;
  sourceCode: string;
  description: string;
  type: string;
  taskId: number;
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
