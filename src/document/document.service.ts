import { Injectable } from '@nestjs/common';
import {
  DeleteResult,
  FindOptionsOrder,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { Document } from './entity/document.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document) private repo: Repository<Document>,
  ) {}

  async getOne(document: number): Promise<Document | null> {
    return this.repo.findOne({ where: { id: document } });
  }

  async getAll(
    skip?: number,
    take?: number,
    where?: FindOptionsWhere<Document>,
    order?: FindOptionsOrder<Document>,
  ): Promise<Document[]> {
    return await this.repo.find({ skip, take, where, order });
  }

  async create(data: Document): Promise<Document> {
    return await this.repo.save(data);
  }

  async update(
    where: FindOptionsWhere<Document>,
    data: QueryDeepPartialEntity<Document>,
  ): Promise<Document> {
    await this.repo.update(where, data);
    return await this.repo.findOneByOrFail(where);
  }

  async del(criteria: FindOptionsWhere<Document>): Promise<DeleteResult> {
    return await this.repo.delete(criteria);
  }
}
