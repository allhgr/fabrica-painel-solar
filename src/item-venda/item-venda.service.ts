import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemVendaDto } from './dto/create-item-venda.dto';

@Injectable()
export class ItemVendaService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateItemVendaDto) {
    return this.prisma.itemVenda.create({ data });
  }

  findAll() {
    return this.prisma.itemVenda.findMany();
  }

  findOne(id: number) {
    return this.prisma.itemVenda.findUnique({ where: { id_venda: id } });
  }

  remove(id: number) {
    return this.prisma.itemVenda.delete({ where: { id_venda: id } });
  }
}
