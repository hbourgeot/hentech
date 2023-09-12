// Create
export class CreateEmployeeProjectDto {
  employeeId: number;
  projectId: number;
}

// Update (por lo general no se actualizan las tablas de relación, pero aquí tienes un DTO por si acaso)
export class UpdateEmployeeProjectDto {
  employeeId?: number;
  projectId?: number;
}

// Delete tampoco necesita DTO, los IDs son suficientes
