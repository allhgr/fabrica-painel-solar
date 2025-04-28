import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProdutoDto: CreateProdutoDto) {
    const { descricao, preco, id_materia_prima, quantidade } = createProdutoDto;
  
    const estoqueMateriaPrima = await this.prisma.estoque.findFirst({
      where: { id_materia_prima },
    });
  
    if (!estoqueMateriaPrima || estoqueMateriaPrima.quantidade < quantidade) {
      throw new Error('Estoque de matéria-prima insuficiente.');
    }
  
    // Decrementa a matéria-prima
    await this.prisma.estoque.update({
      where: { id: estoqueMateriaPrima.id },
      data: { quantidade: { decrement: quantidade } },
    });
  
    // Cria o produto
    const produto = await this.prisma.produto.create({
      data: {
        descricao,
        preco,
        quantidade,
      },
    });
  
    // Atualiza estoque do produto
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
