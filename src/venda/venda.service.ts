import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';

@Injectable()
export class VendaService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateVendaDto) {
    return this.prisma.venda.create({ 
      data: {
        ...data,
        data_venda: data.data_venda
          ? new Date(data.data_venda)
          : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.venda.findMany();
  }

  findOne(id: number) {
    return this.prisma.venda.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateVendaDto) {
    return this.prisma.venda.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.venda.delete({ where: { id } });
  }
}
