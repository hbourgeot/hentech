// Create
export class CreateTaskDto {
  description: string;
  estimatedDuration: string;
  actualDuration: string;
  estimatedDate: Date;
  actualDate: Date;
  type: string;
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
