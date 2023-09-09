import {
  Controller,
  // Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { ProjectService } from './project.service';
// import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
}
