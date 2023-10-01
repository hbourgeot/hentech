import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, SearchTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Task } from './entity/task.entity';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Project } from 'src/project/entity/project.entity';
import { DeleteResult, FindOptionsWhere } from 'typeorm';

@ApiTags('tasks')
@Controller('api/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOkResponse({ type: Task })
  @Post()
  async createTask(@Body() task: CreateTaskDto): Promise<Task> {
    const newTask = new Task();
    newTask.actualDate = task.actualDate;
    newTask.actualDuration = task.actualDuration;

    newTask.estimatedDate = task.estimatedDate;
    newTask.estimatedDuration = task.estimatedDuration;

    newTask.description = task.description;
    newTask.type = task.type;

    newTask.project = new Project();
    newTask.project.id = task.projectId;

    return await this.taskService.create(newTask);
  }

  @ApiOkResponse({ type: Task })
  @ApiBadRequestResponse({ type: undefined, description: 'Bad Request' })
  @ApiNotFoundResponse({ type: undefined, description: 'Task Not Found' })
  @Get('task/:id')
  async getTask(@Param('id') stringId: string): Promise<Task | null> {
    const id = Number(+stringId);
    return await this.taskService.getOne(id);
  }

  @ApiOkResponse({ type: Task, isArray: true })
  @Get()
  async getTasks(): Promise<Task[]> {
    return await this.taskService.getAll();
  }

  @ApiOkResponse({ type: Task })
  @Patch('task/:id')
  async updateTask(
    @Param('id') stringId: string,
    @Body() updatedTask: UpdateTaskDto,
  ): Promise<Task> {
    const id = Number(+stringId);
    const task = (await this.taskService.getOne(id)) as Task;
    return await this.taskService.update({ ...task }, { ...updatedTask });
  }

  @ApiOkResponse({ type: Task })
  @Delete('task/:id')
  async deleteTask(@Param('id') stringId: string): Promise<DeleteResult> {
    const id = Number(+stringId);
    return await this.taskService.del({ id });
  }

  @Get('search')
  async searchTask(@Query() search: SearchTaskDto) {
    const task: FindOptionsWhere<Task> = {
      actualDate: search.actualDate,
      actualDuration: search.actualDuration,
      description: search.description,
      estimatedDate: search.estimatedDate,
      estimatedDuration: search.estimatedDuration,
      id: search.id,
      project: {
        id: search.projectId,
      },
    };
  }
}
