import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Version } from '@prisma/client';

@Injectable()
export class VersionService {
  constructor(private prisma: PrismaService) {}

  async getOne(version: number): Promise<Version | null> {
    return this.prisma.version.findUnique({ where: { id: version } });
  }

  async getAll(
    skip?: number,
    take?: number,
    cursor?: Prisma.VersionWhereUniqueInput,
    where?: Prisma.VersionWhereInput,
    orderBy?: Prisma.VersionOrderByWithRelationInput,
  ): Promise<Version[]> {
    return this.prisma.version.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.VersionCreateInput): Promise<Version> {
    return this.prisma.version.create({ data });
  }

  async update(
    where: Prisma.VersionWhereUniqueInput,
    data: Prisma.VersionUpdateInput,
  ): Promise<Version> {
    return this.prisma.version.update({ data, where });
  }

  async del(where: Prisma.VersionWhereUniqueInput): Promise<Version> {
    return this.prisma.version.delete({ where });
  }
}
