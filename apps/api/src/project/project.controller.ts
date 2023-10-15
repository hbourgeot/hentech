import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
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
import { Employee } from 'src/employee/entity/employee.entity';
import { EmployeeProjectService } from 'src/employee-project/employeeProject.service';

@ApiTags('projects')
@Controller('api/projects')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly employeeProjectService: EmployeeProjectService,
  ) {}

  @ApiOkResponse({ type: Project })
  @Post()
  async createEmployee(@Body() project: CreateProjectDto): Promise<Project> {
    const projectEnt = new Project();
    projectEnt.comercialDesignation = project.comercialDesignation;
    projectEnt.name = project.name;
    projectEnt.status = project.status;
    projectEnt.type = project.type;

    projectEnt.leader = new Employee();
    projectEnt.leader.id = project.leaderId;

    return await this.projectService.create({ ...projectEnt });
  }

  @ApiOkResponse({ type: Project })
  @ApiBadRequestResponse({ type: undefined, description: 'Bad Request' })
  @ApiNotFoundResponse({ type: undefined, description: 'Project Not Found' })
  @Get('project/:id')
  async getEmployee(@Param('id') stringId: string): Promise<Project | null> {
    const id = Number(+stringId);
    const project = await this.projectService.getOne(id);

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return project;
  }

  @ApiOkResponse({ type: Project, isArray: true })
  @Get()
  async getEmployees(): Promise<Project[]> {
    return await this.projectService.getAll();
  }

  @ApiOkResponse({ type: Project })
  @Put()
  async updateEmployee(
    @Body() updatedEmployee: UpdateProjectDto,
  ): Promise<Project> {
    return await this.projectService.update(updatedEmployee);
  }

  @Get('project/:id/employees')
  async getProjectEmployees(@Param('id') id: string) {
    return await this.employeeProjectService.getAll(
      0,
      50,
      { projectId: Number(+id) },
      { employee: true, project: false },
      {
        employee: {
          password: false,
          address: true,
          email: true,
          id: true,
          lastName: true,
          name: true,
          phoneNumber: true,
        },
      },
    );
  }
}
