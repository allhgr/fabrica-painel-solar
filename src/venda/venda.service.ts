import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';

@Injectable()
export class VendaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createVendaDto: CreateVendaDto) {
    return this.prisma.venda.create({
      data: {
        id_usuario: createVendaDto.id_usuario,
        id_cliente: createVendaDto.id_cliente,
        data_venda: createVendaDto.data_venda,
        itens: {
          create: createVendaDto.itens.map(item => ({
            id_produto: item.id_produto,
            quantidade: item.quantidade,
            preco_unitario: item.preco_unitario,
          })),
        },
      },
      include: {
        itens: true,
      },
    });
  }

  findAll() {
    return this.prisma.venda.findMany({
      include: {
        itens: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.venda.findUnique({
      where: { id },
      include: {
        itens: true,
      },
    });
  }

  update(id: number, updateVendaDto: UpdateVendaDto) {
    const { id_usuario, id_cliente, data_venda } = updateVendaDto;
    return this.prisma.venda.update({
      where: { id },
      data: {
        ...(id_usuario && { id_usuario }),
        ...(id_cliente && { id_cliente }),
        ...(data_venda && { data_venda }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.venda.delete({
      where: { id },
    });
  }
}
