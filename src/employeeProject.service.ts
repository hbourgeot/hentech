import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, EmployeeProject } from '@prisma/client';

@Injectable()
export class EmployeeProjectService {
  constructor(private prisma: PrismaService) {}

  async getOne(
    employeeProject: Prisma.EmployeeProjectWhereUniqueInput,
  ): Promise<EmployeeProject | null> {
    return this.prisma.employeeProject.findUnique({ where: employeeProject });
  }

  async getAll(
    skip?: number,
    take?: number,
    cursor?: Prisma.EmployeeProjectWhereUniqueInput,
    where?: Prisma.EmployeeProjectWhereInput,
    orderBy?: Prisma.EmployeeProjectOrderByWithRelationInput,
  ): Promise<EmployeeProject[]> {
    return this.prisma.employeeProject.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(
    data: Prisma.EmployeeProjectCreateInput,
  ): Promise<EmployeeProject> {
    return this.prisma.employeeProject.create({ data });
  }

  async update(
    where: Prisma.EmployeeProjectWhereUniqueInput,
    data: Prisma.EmployeeProjectUpdateInput,
  ): Promise<EmployeeProject> {
    return this.prisma.employeeProject.update({ data, where });
  }

  async del(
    where: Prisma.EmployeeProjectWhereUniqueInput,
  ): Promise<EmployeeProject> {
    return this.prisma.employeeProject.delete({ where });
  }
}
