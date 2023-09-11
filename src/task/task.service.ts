import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  async getOne(document: number): Promise<Task | null> {
    return this.repo.findOne({
      where: { id: document },
      relations: { documents: true, project: true },
    });
  }

  async getAll(
    skip?: number,
    take?: number,
    where?: FindOptionsWhere<Task>,
    order?: FindOptionsOrder<Task>,
  ): Promise<Task[]> {
    return await this.repo.find({
      skip,
      take,
      where,
      order,
      relations: { documents: true, project: true },
    });
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
