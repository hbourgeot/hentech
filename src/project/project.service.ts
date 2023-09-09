import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Project } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async getOne(
    project: Prisma.ProjectWhereUniqueInput,
  ): Promise<Project | null> {
    return this.prisma.project.findUnique({ where: project });
  }

  async getAll(
    skip?: number,
    take?: number,
    cursor?: Prisma.ProjectWhereUniqueInput,
    where?: Prisma.ProjectWhereInput,
    orderBy?: Prisma.ProjectOrderByWithRelationInput,
  ): Promise<Project[]> {
    return this.prisma.project.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.ProjectCreateInput): Promise<Project> {
    return this.prisma.project.create({ data });
  }

  async update(
    where: Prisma.ProjectWhereUniqueInput,
    data: Prisma.ProjectUpdateInput,
  ): Promise<Project> {
    return this.prisma.project.update({ data, where });
  }

  async del(where: Prisma.ProjectWhereUniqueInput): Promise<Project> {
    return this.prisma.project.delete({ where });
  }
}
