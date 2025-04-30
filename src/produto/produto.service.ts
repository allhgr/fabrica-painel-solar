import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { MateriaPrimaService } from 'src/materia-prima/materia-prima.service';

@Injectable()
export class ProdutoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly materiaPrima: MateriaPrimaService,
  ) {}

  async create(createProdutoDto: CreateProdutoDto) {
    const { descricao, preco, id_materia_prima, quantidade } = createProdutoDto;
  
    // Verifica se a matéria-prima existe e tem quantidade suficiente
    const materiaPrima = await this.prisma.materiaPrima.findUnique({
      where: { id_materia_prima },
    });
  
    if (!materiaPrima) {
      throw new Error('Matéria-prima não encontrada.');
    }
  
    if (materiaPrima.quantidade === null || materiaPrima.quantidade < quantidade) {
      throw new Error('Quantidade de matéria-prima insuficiente.');
    }
  
    // Atualiza a quantidade da matéria-prima (subtrai a usada)
    await this.prisma.materiaPrima.update({
      where: { id_materia_prima },
      data: { quantidade: { decrement: quantidade } },
    });
  
    // Cria o produto vinculado à matéria-prima
    const produto = await this.prisma.produto.create({
      data: {
        descricao,
        preco,
        quantidade,
        id_materia_prima,
      },
    });
  
    // Cria o estoque para o novo produto
    await this.prisma.estoque.create({
      data: {
        id_produto: produto.id_produto,
        quantidade,
      },
    });
  
    return produto;
  }
  
  

  async findAll() {
    return this.prisma.produto.findMany();
  }

  async findOne(id: number) {
    return this.prisma.produto.findUnique({
      where: { id_produto: id },
    });
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prisma.produto.update({
      where: { id_produto: id },
      data: updateProdutoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.produto.delete({
      where: { id_produto: id },
    });
  }

}
