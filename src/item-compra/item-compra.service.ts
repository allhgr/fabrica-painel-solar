import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemCompraDto } from './dto/create-item-compra.dto';
import { UpdateItemCompraDto } from './dto/update-item-compra.dto';

@Injectable()
export class ItemCompraService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateItemCompraDto) {
    return this.prisma.itemCompra.create({ data });
  }

  findAll() {
    return this.prisma.itemCompra.findMany();
  }

  findOne(id: number) {
    return this.prisma.itemCompra.findUnique({ where: { id_compra: id } });
  }

  update(id: number, data: UpdateItemCompraDto) {
    return this.prisma.itemCompra.update({
      where: { id_compra: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.itemCompra.delete({ where: { id_compra: id } });
  }
}
