import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateProdutoDto) {
    return this.prisma.produto.create({ data });
  }

  findAll() {
    return this.prisma.produto.findMany();
  }

  findOne(id: number) {
    return this.prisma.produto.findUnique({ where: { id_produto: id } });
  }

  update(id: number, data: UpdateProdutoDto) {
    return this.prisma.produto.update({
      where: { id_produto: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.produto.delete({ where: { id_produto: id } });
  }
}
