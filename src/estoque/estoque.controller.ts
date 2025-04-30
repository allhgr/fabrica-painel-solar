import { Controller, Get, Param } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Get()
  @ApiOperation({ summary: 'Visualizar quantidade total de itens no estoque' })
  @ApiResponse({ status: 200, description: 'Quantidade do estoque geral' })
  getTotalQuantidade() {
    return this.estoqueService.totalGeral();
  }
  

  @Get('produto')
  @ApiOperation({ summary: 'Visualizar quantidade de produtos no estoque' })
  @ApiResponse({ status: 200, description: 'Quantidade do estoque de produtos' })
  totalProduto() {
    return this.estoqueService.totalProduto();
  }

@Get('materia_prima')
  @ApiOperation({ summary: 'Visualizar quantidade de materia prima no estoque' })
  @ApiResponse({ status: 200, description: 'Quantidade do estoque de materia prima' })
  totalMateriaPrima() {
    return this.estoqueService.totalMateriaPrima();
  }
}