import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EstoqueService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.estoque.findMany();
  }

  findByProdutoAndMateriaPrima(id_produto: number, id_materia_prima: number) {
    return this.prisma.estoque.findFirst({
      where: { id_produto, id_materia_prima },
    });
  }
}
