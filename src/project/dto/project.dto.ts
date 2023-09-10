// Create
export class CreateProjectDto {
  id: number = 0;
  name: string;
  comercialDesignation: string;
  status: string;
  leader: number;
}

// Update
export class UpdateProjectDto {
  name?: string;
  comercialDesignation?: string;
  status?: string;
  leader?: {
    id: number;
  };
}

// Delete no necesita DTO, el ID es suficiente
