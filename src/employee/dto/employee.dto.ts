import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';
// Create
export class CreateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(50)
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
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
