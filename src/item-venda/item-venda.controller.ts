import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ItemVendaService } from './item-venda.service';
import { CreateItemVendaDto } from './dto/create-item-venda.dto';

@ApiTags('Relatório de Venda (ID)')
@Controller('itens-venda')
export class ItemVendaController {
  constructor(private readonly itemVendaService: ItemVendaService) {}

  //@Post()
  @ApiOperation({ summary: 'Criar um novo item de venda' })
  create(@Body() createItemVendaDto: CreateItemVendaDto) {
    return this.itemVendaService.create(createItemVendaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os relatórios de venda' })
  findAll() {
    return this.itemVendaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um relatório de venda por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.itemVendaService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um relatório de venda' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.itemVendaService.remove(id);
  }
}
