import { Inject, Injectable } from '@nestjs/common';
import {
  DataSource,
  DeleteResult,
  FindOptionsOrder,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Project } from './entity/project.entity';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { ProjectSearchDTO } from './dto/project.dto';

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project) private repo: Repository<Project>) {}

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

  /* async search(
  where: FindOptionsWhere<Project>,
): Promise<Project[]> {
  return await this.repo.findBy({...where});
} */

  async search(params: ProjectSearchDTO) {
    const query = this.repo
      .createQueryBuilder('project')
      .leftJoinAndSelect('project.leader', 'leader');

    if (params.leaderId) {
      query.andWhere("LOWER(CONCAT(leader.name, ' ', leader.lastName)) LIKE :leaderId", {
        leaderId: `%${params.leaderId.toLowerCase()}%`,
      });
    }

    for (const key in params) {
      //@ts-ignore
      if (params[key] && key !== 'leaderId') {
        query.andWhere(`LOWER(project.${key}) LIKE :${key}`, {
          //@ts-ignore
          [key]: `%${params[key].toLowerCase()}%`,
        });
      }
    }

    return query.getMany();
  }
}
