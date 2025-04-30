import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MateriaPrimaService } from '../materia-prima/materia-prima.service';
import { ProdutoService } from 'src/produto/produto.service';

@Injectable()
export class EstoqueService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly materiaPrimaService: MateriaPrimaService, 
    private readonly produtoService: ProdutoService,
  ) {}

  async totalMateriaPrima() {
    const materiasPrimas = await this.materiaPrimaService.findAll();
    const total = materiasPrimas.reduce((acc, item) => acc + (item.quantidade || 0), 0);
    return { tipo: 'materia-prima', quantidade_total: total };
  }

  async totalProduto() {
    const produtos = await this.produtoService.findAll();
    const total = produtos.reduce((acc, item) => acc + (item.quantidade || 0), 0);
    return { tipo: 'produto', quantidade_total: total };
  }

  async totalGeral() {
    const [materia, produto] = await Promise.all([
      this.totalMateriaPrima(),
      this.totalProduto(),
    ]);
    return [materia, produto];
  }
}
