import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';
import { Project } from './entity/project.entity';
import { DeleteResult } from 'typeorm';

@ApiTags('projects')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @ApiOkResponse({ type: Project })
  @Post()
  async createEmployee(@Body() project: CreateProjectDto): Promise<Project> {
    const projectEnt = new Project();
    projectEnt.comercialDesignation = project.comercialDesignation;
    projectEnt.name = project.name;
    projectEnt.status = project.status;
    projectEnt.leader.id = project.leader;

    return await this.projectService.create({ ...projectEnt });
  }

  @ApiOkResponse({ type: Project })
  @ApiBadRequestResponse({ type: undefined, description: 'Bad Request' })
  @ApiNotFoundResponse({ type: undefined, description: 'Project Not Found' })
  @Get(':id')
  async getEmployee(@Param('id') stringId: string): Promise<Project | null> {
    const id = Number(+stringId);
    return await this.projectService.getOne(id);
  }

  @ApiOkResponse({ type: Project, isArray: true })
  @Get()
  async getEmployees(): Promise<Project[]> {
    return await this.projectService.getAll();
  }

  @ApiOkResponse({ type: Project })
  @Patch(':id')
  async updateEmployee(
    @Param('id') stringId: string,
    @Body() updatedEmployee: UpdateProjectDto,
  ): Promise<Project> {
    const id = Number(+stringId);
    const project = (await this.projectService.getOne(id)) as Project;
    return await this.projectService.update(
      { ...project },
      { ...updatedEmployee },
    );
  }

  @ApiOkResponse({ type: Project })
  @Delete(':id')
  async deleteEmployee(@Param('id') stringId: string): Promise<DeleteResult> {
    const id = Number(+stringId);
    return await this.projectService.del({ id });
  }
}
