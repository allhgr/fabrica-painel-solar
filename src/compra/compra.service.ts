import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { MateriaPrima } from '@prisma/client'; // IMPORTANTE: importa o tipo correto

@Injectable()
export class CompraService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCompraDto: CreateCompraDto) {
    const itensCriados: {
      id_materia_prima: number;
      quantidade: number;
      preco_unitario: number;
    }[] = [];

    for (const item of createCompraDto.itens) {
      let materiaPrima: MateriaPrima | null = null; // TIPAGEM CERTA AQUI

      if (item.id_materia_prima) {
        materiaPrima = await this.prisma.materiaPrima.findUnique({
          where: { id_materia_prima: item.id_materia_prima },
        });
      }

      if (!materiaPrima) {
        if (!item.descricao) {
          throw new Error('Descrição da matéria-prima é obrigatória se não houver ID.');
        }

        materiaPrima = await this.prisma.materiaPrima.create({
          data: {
            descricao: item.descricao,
            preco: item.preco_unitario ?? 0,
            quantidade: 0, // PRECISA inicializar a quantidade se o modelo exigir
          },
        });
      }

      itensCriados.push({
        id_materia_prima: materiaPrima.id_materia_prima,
        quantidade: item.quantidade,
        preco_unitario: item.preco_unitario,
      });

      const estoqueExistente = await this.prisma.estoque.findFirst({
        where: { id_materia_prima: materiaPrima.id_materia_prima },
      });

      if (estoqueExistente) {
        await this.prisma.estoque.update({
          where: { id: estoqueExistente.id },
          data: {
            quantidade: {
              increment: item.quantidade,
            },
          },
        });
      } else {
        await this.prisma.estoque.create({
          data: {
            id_materia_prima: materiaPrima.id_materia_prima,
            quantidade: item.quantidade,
          },
        });
      }
    }

    const compra = await this.prisma.compra.create({
      data: {
        id_usuario: createCompraDto.id_usuario,
        id_fornecedor: createCompraDto.id_fornecedor,
        data_compra: createCompraDto.data_compra,
        itens: {
          create: itensCriados,
        },
      },
      include: {
        itens: true,
      },
    });

    return compra;
  }

  findAll() {
    return this.prisma.compra.findMany({
      include: {
        itens: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.compra.findUnique({
      where: { id },
      include: {
        itens: true,
      },
    });
  }

  update(id: number, updateCompraDto: UpdateCompraDto) {
    const { id_usuario, id_fornecedor, data_compra } = updateCompraDto;
    return this.prisma.compra.update({
      where: { id },
      data: {
        ...(id_usuario && { id_usuario }),
        ...(id_fornecedor && { id_fornecedor }),
        ...(data_compra && { data_compra }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.compra.delete({
      where: { id },
    });
  }
}
