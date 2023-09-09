import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Employee } from '@prisma/client';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async getOne(id: number): Promise<Employee | null> {
    return this.prisma.employee.findUnique({ where: { id: id } });
  }

  async getAll(
    skip?: number,
    take?: number,
    cursor?: Prisma.EmployeeWhereUniqueInput,
    where?: Prisma.EmployeeWhereInput,
    orderBy?: Prisma.EmployeeOrderByWithRelationInput,
  ): Promise<Employee[]> {
    return this.prisma.employee.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.EmployeeCreateInput): Promise<Employee> {
    return this.prisma.employee.create({ data });
  }

  async update(
    where: Prisma.EmployeeWhereUniqueInput,
    data: Prisma.EmployeeUpdateInput,
  ): Promise<Employee> {
    return this.prisma.employee.update({ data, where });
  }

  async del(where: Prisma.EmployeeWhereUniqueInput): Promise<Employee> {
    return this.prisma.employee.delete({ where });
  }
}
