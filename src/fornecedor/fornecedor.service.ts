import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';

@Injectable()
export class FornecedorService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateFornecedorDto) {
    return this.prisma.fornecedor.create({ data });
  }

  findAll() {
    return this.prisma.fornecedor.findMany();
  }

  findOne(id: number) {
    return this.prisma.fornecedor.findUnique({ where: { id_fornecedor: id } });
  }

  update(id: number, data: UpdateFornecedorDto) {
    return this.prisma.fornecedor.update({
      where: { id_fornecedor: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.fornecedor.delete({ where: { id_fornecedor: id } });
  }
}
