import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateClienteDto) {
    return this.prisma.cliente.create({ 
      data: {
        ...data,
        data_nascimento: data.data_nascimento
          ? new Date(data.data_nascimento)
          : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.cliente.findMany();
  }

  findOne(id: number) {
    return this.prisma.cliente.findUnique({ where: { id_cliente: id } });
  }

  update(id: number, data: UpdateClienteDto) {
    return this.prisma.cliente.update({
      where: { id_cliente: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.cliente.delete({ where: { id_cliente: id } });
  }
}
