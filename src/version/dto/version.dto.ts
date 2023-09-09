// Create
export class CreateVersionDto {
  date: Date;
  description: string;
  tag: string;
  documentId: number;
}

// Update
export class UpdateVersionDto {
  date?: Date;
  description?: string;
  tag?: string;
  documentId?: number;
}

// Delete no necesita DTO, el ID es suficiente
