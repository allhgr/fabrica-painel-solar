import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMateriaPrimaDto } from './dto/create-materia-prima.dto';
import { UpdateMateriaPrimaDto } from './dto/update-materia-prima.dto';

@Injectable()
export class MateriaPrimaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMateriaPrimaDto: CreateMateriaPrimaDto) {
    return this.prisma.materiaPrima.create({ data: createMateriaPrimaDto });
  }

  findAll() {
    return this.prisma.materiaPrima.findMany();
  }

  findOne(id: number) {
    return this.prisma.materiaPrima.findUnique({
      where: { id_materia_prima: id },
    });
  }

  update(id: number, updateMateriaPrimaDto: UpdateMateriaPrimaDto) {
    return this.prisma.materiaPrima.update({
      where: { id_materia_prima: id },
      data: updateMateriaPrimaDto,
    });
  }

  remove(id: number) {
    return this.prisma.materiaPrima.delete({
      where: { id_materia_prima: id },
    });
  }
}
