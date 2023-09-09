import {
  Controller,
  // Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
// import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
}
