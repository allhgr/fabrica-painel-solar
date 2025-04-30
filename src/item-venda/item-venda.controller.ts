import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemVendaService } from './item-venda.service';
import { CreateItemVendaDto } from './dto/create-item-venda.dto';
import { UpdateItemVendaDto } from './dto/update-item-venda.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Relatório de Vendas (ID)')
@Controller('item-venda')
export class ItemVendaController {
  constructor(private readonly itemVendaService: ItemVendaService) {}

  //@Post()
  create(@Body() createItemVendaDto: CreateItemVendaDto) {
    return this.itemVendaService.create(createItemVendaDto);
  }

  @Get()
  findAll() {
    return this.itemVendaService.findAll();
  }

  //@Get(':id_venda/:id_produto')
  findOne(@Param('id_venda') id_venda: string, @Param('id_produto') id_produto: string) {
    return this.itemVendaService.findOne(+id_venda, +id_produto);
  }

  //@Patch(':id_venda/:id_produto')
  update(@Param('id_venda') id_venda: string, @Param('id_produto') id_produto: string, @Body() updateItemVendaDto: UpdateItemVendaDto) {
    return this.itemVendaService.update(+id_venda, +id_produto, updateItemVendaDto);
  }

  //@Delete(':id_venda/:id_produto')
  remove(@Param('id_venda') id_venda: string, @Param('id_produto') id_produto: string) {
    return this.itemVendaService.remove(+id_venda, +id_produto);
  }
}
