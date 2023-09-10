import { Inject, Injectable } from '@nestjs/common';
import { Task } from 'src/task/entity/task.entity';
import {
  DeleteResult,
  FindOptionsOrder,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class TaskService {
  constructor(@Inject('TASK_REPOSITORY') private repo: Repository<Task>) {}

  async getOne(document: number): Promise<Task | null> {
    return this.repo.findOne({ where: { id: document } });
  }

  async getAll(
    skip?: number,
    take?: number,
    where?: FindOptionsWhere<Task>,
    order?: FindOptionsOrder<Task>,
  ): Promise<Task[]> {
    return await this.repo.find({ skip, take, where, order });
  }

  async create(data: Task): Promise<Task> {
    return await this.repo.save(data);
  }

  async update(
    where: FindOptionsWhere<Task>,
    data: QueryDeepPartialEntity<Task>,
  ): Promise<Task> {
    await this.repo.update(where, data);
    return await this.repo.findOneByOrFail(where);
  }

  async del(criteria: FindOptionsWhere<Task>): Promise<DeleteResult> {
    return await this.repo.delete(criteria);
  }
}
