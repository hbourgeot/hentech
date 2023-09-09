import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Document } from '@prisma/client';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async getOne(document: number): Promise<Document | null> {
    return this.prisma.document.findUnique({ where: { id: document } });
  }

  async getAll(
    skip?: number,
    take?: number,
    cursor?: Prisma.DocumentWhereUniqueInput,
    where?: Prisma.DocumentWhereInput,
    orderBy?: Prisma.DocumentOrderByWithRelationInput,
  ): Promise<Document[]> {
    return this.prisma.document.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.DocumentCreateInput): Promise<Document> {
    return this.prisma.document.create({ data });
  }

  async update(
    where: Prisma.DocumentWhereUniqueInput,
    data: Prisma.DocumentUpdateInput,
  ): Promise<Document> {
    return this.prisma.document.update({ data, where });
  }

  async del(where: Prisma.DocumentWhereUniqueInput): Promise<Document> {
    return this.prisma.document.delete({ where });
  }
}
