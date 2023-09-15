import { Injectable } from '@nestjs/common';
import { Role } from './entity/employee.entity';
import {
  DeleteResult,
  FindOptionsOrder,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(Role) private repo: Repository<Role>) {}

  async getOne(id: number): Promise<Role | null> {
    return await this.repo.findOneBy({ id: id });
  }

  async getAll(
    skip?: number,
    take?: number,
    where?: FindOptionsWhere<Role>,
    order?: FindOptionsOrder<Role>,
  ): Promise<Role[]> {
    return await this.repo.find({ skip, take, where, order });
  }

  async create(data: Role): Promise<Role> {
    return await this.repo.save(data);
  }

  async update(
    where: FindOptionsWhere<Role>,
    data: QueryDeepPartialEntity<Role>,
  ): Promise<Role> {
    await this.repo.update(where, data);
    return await this.repo.findOneByOrFail(where);
  }

  async del(criteria: FindOptionsWhere<Role>): Promise<DeleteResult> {
    return await this.repo.delete(criteria);
  }
}
