import { Inject, Injectable } from '@nestjs/common';
import {
  DeleteResult,
  FindOptionsOrder,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { EmployeeProject } from './employeeProject.entity';

@Injectable()
export class EmployeeProjectService {
  constructor(
    @Inject('EMPLOYEE_PROJECT_REPOSITORY')
    private repo: Repository<EmployeeProject>,
  ) {}

  async getAll(
    skip?: number,
    take?: number,
    where?: FindOptionsWhere<EmployeeProject>,
    order?: FindOptionsOrder<EmployeeProject>,
  ): Promise<EmployeeProject[]> {
    return await this.repo.find({ skip, take, where, order });
  }

  async create(data: EmployeeProject): Promise<EmployeeProject> {
    return await this.repo.save(data);
  }

  async update(
    where: FindOptionsWhere<EmployeeProject>,
    data: QueryDeepPartialEntity<EmployeeProject>,
  ): Promise<EmployeeProject> {
    await this.repo.update(where, data);
    return await this.repo.findOneByOrFail(where);
  }

  async del(
    criteria: FindOptionsWhere<EmployeeProject>,
  ): Promise<DeleteResult> {
    return await this.repo.delete(criteria);
  }
}
