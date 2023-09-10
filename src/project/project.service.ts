import { Inject, Injectable } from '@nestjs/common';
import {
  DeleteResult,
  FindOptionsOrder,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Project } from './entity/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @Inject('PROJECT_REPOSITORY') private repo: Repository<Project>,
  ) {}

  async getOne(project: number): Promise<Project | null> {
    return this.repo.findOne({ where: { id: project } });
  }

  async getAll(
    skip?: number,
    take?: number,
    where?: FindOptionsWhere<Project>,
    order?: FindOptionsOrder<Project>,
  ): Promise<Project[]> {
    return await this.repo.find({ skip, take, where, order });
  }

  async create(data: Project): Promise<Project> {
    return await this.repo.save(data);
  }

  async update(
    where: FindOptionsWhere<Project>,
    data: QueryDeepPartialEntity<Project>,
  ): Promise<Project> {
    await this.repo.update(where, data);
    return await this.repo.findOneByOrFail(where);
  }

  async del(criteria: FindOptionsWhere<Project>): Promise<DeleteResult> {
    return await this.repo.delete(criteria);
  }
}
