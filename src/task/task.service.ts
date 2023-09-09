import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getOne(task: number): Promise<Task | null> {
    return this.prisma.task.findUnique({ where: { id: task } });
  }

  async getAll(
    skip?: number,
    take?: number,
    cursor?: Prisma.TaskWhereUniqueInput,
    where?: Prisma.TaskWhereInput,
    orderBy?: Prisma.TaskOrderByWithRelationInput,
  ): Promise<Task[]> {
    return this.prisma.task.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({ data });
  }

  async update(
    where: Prisma.TaskWhereUniqueInput,
    data: Prisma.TaskUpdateInput,
  ): Promise<Task> {
    return this.prisma.task.update({ data, where });
  }

  async del(where: Prisma.TaskWhereUniqueInput): Promise<Task> {
    return this.prisma.task.delete({ where });
  }
}
