// Create
export class CreateEmployeeDto {
  id: number;
  name: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
}

// Update
export class UpdateEmployeeDto {
  name?: string;
  lastName?: string;
  address?: string;
  email?: string;
  phoneNumber?: string;
}
