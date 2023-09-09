// Create
export class CreateProjectDto {
  name: string;
  comercialDesignation: string;
  status: string;
  leaderId: number;
}

// Update
export class UpdateProjectDto {
  name?: string;
  comercialDesignation?: string;
  status?: string;
  leaderId?: number;
}

// Delete no necesita DTO, el ID es suficiente
