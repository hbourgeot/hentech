import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// Create
export class CreateEmployeeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phoneNumber: string;
}

// Update
export class UpdateEmployeeDto {
  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  lastName?: string;

  @ApiPropertyOptional()
  address?: string;

  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional()
  phoneNumber?: string;
}
