import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ItemCompraService } from './item-compra.service';
import { CreateItemCompraDto } from './dto/create-item-compra.dto';

@ApiTags('Relatório de Compra (ID)')
@Controller('itens-compra')
export class ItemCompraController {
  constructor(private readonly itemCompraService: ItemCompraService) {}

  //@Post()
  @ApiOperation({ summary: 'Criar um novo item de compra' })
  create(@Body() createItemCompraDto: CreateItemCompraDto) {
    return this.itemCompraService.create(createItemCompraDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os relatórios de compra' })
  findAll() {
    return this.itemCompraService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um relatório de compra por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.itemCompraService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um relatório de compra' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.itemCompraService.remove(id);
  }
}
