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
    
  async remove(id: number) {
    // Apaga registros de Estoque relacionados
    await this.prisma.estoque.deleteMany({
      where: { id_materia_prima: id },
    });
  
    // Apaga itens de compras que usam a matéria-prima
    await this.prisma.itemCompra.deleteMany({
      where: { id_materia_prima: id },
    });
  
    // Apaga produtos que usam a matéria-prima
    await this.prisma.produto.deleteMany({
      where: { id_materia_prima: id },
    });
  
    // Agora sim, pode apagar a matéria-prima
    return this.prisma.materiaPrima.delete({
      where: { id_materia_prima: id },
    });
  }
}
