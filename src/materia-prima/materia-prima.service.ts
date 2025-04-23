import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMateriaPrimaDto } from './dto/create-materia-prima.dto';
import { UpdateMateriaPrimaDto } from './dto/update-materia-prima.dto';

@Injectable()
export class MateriaPrimaService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateMateriaPrimaDto) {
    return this.prisma.materiaPrima.create({ data });
  }

  findAll() {
    return this.prisma.materiaPrima.findMany();
  }

  findOne(id: number) {
    return this.prisma.materiaPrima.findUnique({ where: { id_materia_prima: id } });
  }

  update(id: number, data: UpdateMateriaPrimaDto) {
    return this.prisma.materiaPrima.update({
      where: { id_materia_prima: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.materiaPrima.delete({ where: { id_materia_prima: id } });
  }
}
