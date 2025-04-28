import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemVendaDto } from './dto/create-item-venda.dto';
import { UpdateItemVendaDto } from './dto/update-item-venda.dto';

@Injectable()
export class ItemVendaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createItemVendaDto: CreateItemVendaDto) {
    return this.prisma.itemVenda.create({
      data: {
        id_venda: createItemVendaDto.id_venda,
        id_produto: createItemVendaDto.id_produto,
        quantidade: createItemVendaDto.quantidade,
      },
    });
  }

  findAll() {
    return this.prisma.itemVenda.findMany();
  }

  findOne(id_venda: number, id_produto: number) {
    return this.prisma.itemVenda.findUnique({
      where: {
        id_venda_id_produto: {
          id_venda,
          id_produto,
        },
      },
    });
  }

  update(id_venda: number, id_produto: number, updateItemVendaDto: UpdateItemVendaDto) {
    return this.prisma.itemVenda.update({
      where: {
        id_venda_id_produto: {
          id_venda,
          id_produto,
        },
      },
      data: updateItemVendaDto,
    });
  }

  remove(id_venda: number, id_produto: number) {
    return this.prisma.itemVenda.delete({
      where: {
        id_venda_id_produto: {
          id_venda,
          id_produto,
        },
      },
    });
  }
}
