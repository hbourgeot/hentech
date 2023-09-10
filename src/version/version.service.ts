import { Inject, Injectable } from '@nestjs/common';
import {
  DeleteResult,
  FindOptionsOrder,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Version } from './entity/version.entity';

@Injectable()
export class VersionService {
  constructor(
    @Inject('VERSION_REPOSITORY') private repo: Repository<Version>,
  ) {}

  async getOne(version: number): Promise<Version | null> {
    return this.repo.findOne({ where: { id: version } });
  }

  async getAll(
    skip?: number,
    take?: number,
    where?: FindOptionsWhere<Version>,
    order?: FindOptionsOrder<Version>,
  ): Promise<Version[]> {
    return await this.repo.find({ skip, take, where, order });
  }

  async create(data: Version): Promise<Version> {
    return await this.repo.save(data);
  }

  async update(
    where: FindOptionsWhere<Version>,
    data: QueryDeepPartialEntity<Version>,
  ): Promise<Version> {
    await this.repo.update(where, data);
    return await this.repo.findOneByOrFail(where);
  }

  async del(criteria: FindOptionsWhere<Version>): Promise<DeleteResult> {
    return await this.repo.delete(criteria);
  }
}
