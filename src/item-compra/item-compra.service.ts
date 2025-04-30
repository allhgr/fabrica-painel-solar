import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemCompraDto } from './dto/create-item-compra.dto';
import { UpdateItemCompraDto } from './dto/update-item-compra.dto';

@Injectable()
export class ItemCompraService {
  constructor(private readonly prisma: PrismaService) {}

  create(createItemCompraDto: CreateItemCompraDto) {
    return this.prisma.itemCompra.create({
      data: {
        id_compra: createItemCompraDto.id_compra,
        id_materia_prima: createItemCompraDto.id_materia_prima,
        quantidade: createItemCompraDto.quantidade,
        preco_unitario: createItemCompraDto.preco_unitario,
      },
      include: {
        materiaPrima: {
          select: { descricao: true },
        },
      },
    });
  }

  findAll() {
    return this.prisma.itemCompra.findMany({
      select: {
        id_compra: true,
        id_materia_prima: true,
        quantidade: true,
        preco_unitario: true,
        materiaPrima: {
          select: {
            descricao: true,
          },
        },
      },
    });
  }

  findOne(id_compra: number, id_materia_prima: number) {
    return this.prisma.itemCompra.findUnique({
      where: {
        id_compra_id_materia_prima: {
          id_compra,
          id_materia_prima,
        },
      },
      include: {
        materiaPrima: {
          select: { descricao: true },
        },
      },
    });
  }

  update(id_compra: number, id_materia_prima: number, updateItemCompraDto: UpdateItemCompraDto) {
    return this.prisma.itemCompra.update({
      where: {
        id_compra_id_materia_prima: {
          id_compra,
          id_materia_prima,
        },
      },
      data: updateItemCompraDto,
      include: {
        materiaPrima: {
          select: { descricao: true },
        },
      },
    });
  }

  remove(id_compra: number, id_materia_prima: number) {
    return this.prisma.itemCompra.delete({
      where: {
        id_compra_id_materia_prima: {
          id_compra,
          id_materia_prima,
        },
      },
    });
  }
}
