import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Injectable()
export class CompraService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateCompraDto) {
    return this.prisma.compra.create({ 
      data: {
        ...data,
        data_compra: data.data_compra
          ? new Date(data.data_compra)
          : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.compra.findMany();
  }

  findOne(id: number) {
    return this.prisma.compra.findUnique({ where: { id: id } });
  }

  update(id: number, data: UpdateCompraDto) {
    return this.prisma.compra.update({
      where: { id: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.compra.delete({ where: { id: id } });
  }
}
