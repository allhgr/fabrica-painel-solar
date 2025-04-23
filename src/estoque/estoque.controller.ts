import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { EstoqueService } from './estoque.service';

@ApiTags('Estoque')
@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os itens de estoque' })
  findAll() {
    return this.estoqueService.findAll();
  }

  @Get(':id_produto/:id_materia_prima')
  @ApiOperation({ summary: 'Buscar estoque por produto e matéria-prima' })
  findByProdutoAndMateriaPrima(
    @Param('id_produto', ParseIntPipe) id_produto: number,
    @Param('id_materia_prima', ParseIntPipe) id_materia_prima: number,
  ) {
    return this.estoqueService.findByProdutoAndMateriaPrima(id_produto, id_materia_prima);
  }
}
