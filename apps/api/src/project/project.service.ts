import { Inject, Injectable } from '@nestjs/common';
import {
  DeleteResult,
  FindOptionsOrder,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Project } from './entity/project.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private repo: Repository<Project>,
  ) {}

  async getOne(project: number): Promise<Project | null> {
    return this.repo.findOne({
      where: { id: project },
      relations: { leader: true, tasks: true, employees: true },
    });
  }

  async getAll(
    skip?: number,
    take?: number,
    where?: FindOptionsWhere<Project>,
    order?: FindOptionsOrder<Project>,
  ): Promise<Project[]> {
    return await this.repo.find({
      skip,
      take,
      where,
      order,
      relations: { leader: true, tasks: true, employees: true },
    });
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
