import { Injectable } from '@nestjs/common';
import { Employee } from './entity/employee.entity';
import {
  DeleteResult,
  FindOptionsOrder,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private repo: Repository<Employee>,
  ) {}

  async getOne(id: number): Promise<Employee | null> {
    return await this.repo.findOneBy({ id: id });
  }

  async getAll(
    skip?: number,
    take?: number,
    where?: FindOptionsWhere<Employee>,
    order?: FindOptionsOrder<Employee>,
  ): Promise<Employee[]> {
    return await this.repo.find({ skip, take, where, order });
  }

  async create(data: Employee): Promise<Employee> {
    return await this.repo.save(data);
  }

  async update(
    where: FindOptionsWhere<Employee>,
    data: QueryDeepPartialEntity<Employee>,
  ): Promise<Employee> {
    await this.repo.update(where, data);
    return await this.repo.findOneByOrFail(where);
  }

  async del(criteria: FindOptionsWhere<Employee>): Promise<DeleteResult> {
    return await this.repo.delete(criteria);
  }
}
