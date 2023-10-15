import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOptionsOrder, FindOptionsWhere, Repository } from 'typeorm';
import { Project } from './entity/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProjectDto } from './dto/project.dto';
import { Employee } from 'src/employee/entity/employee.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private repo: Repository<Project>,
    @InjectRepository(Employee) private emprepo: Repository<Employee>,
  ) {}

  async getOne(project: number): Promise<Project | null> {
    return this.repo.findOne({
      where: { id: project },
      relations: { leader: true, tasks: true, employees: true },
    });
  }

  async getForPatch(project: number): Promise<Project | null> {
    return this.repo.findOne({
      where: { id: project },
      relations: { leader: true, tasks: false, employees: false },
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

  async update(data: UpdateProjectDto): Promise<Project> {
    const existingProject = await this.repo.findOne({ where: { id: data.id } });
    if (!existingProject) {
      throw new NotFoundException('Project not found');
    }

    // Update the existing project with the new data.
    existingProject.name = data.name;
    existingProject.comercialDesignation = data.comercialDesignation;
    existingProject.status = data.status;
    existingProject.type = data.type;
    existingProject.id = data.id;

    // If leader needs to be updated, fetch and set.
    if (data.leader && data.leader.id) {
      const newLeader = await this.emprepo.findOne({
        where: { id: data.leader.id },
      });
      if (newLeader) {
        existingProject.leader = newLeader;
      }
    }

    await this.repo.save(existingProject);

    return existingProject;
  }
}
