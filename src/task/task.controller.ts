import {
  Controller,
  // Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
// import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
}
