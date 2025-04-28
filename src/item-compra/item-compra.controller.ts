import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemCompraService } from './item-compra.service';
import { CreateItemCompraDto } from './dto/create-item-compra.dto';
import { UpdateItemCompraDto } from './dto/update-item-compra.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Relatório de Compras (ID)')
@Controller('item-compra')
export class ItemCompraController {
  constructor(private readonly itemCompraService: ItemCompraService) {}

  //@Post()
  create(@Body() createItemCompraDto: CreateItemCompraDto) {
    return this.itemCompraService.create(createItemCompraDto);
  }

  @Get()
  findAll() {
    return this.itemCompraService.findAll();
  }

  @Get(':id_compra/:id_materia_prima')
  findOne(@Param('id_compra') id_compra: string, @Param('id_materia_prima') id_materia_prima: string) {
    return this.itemCompraService.findOne(+id_compra, +id_materia_prima);
  }

  //@Patch(':id_compra/:id_materia_prima')
  update(@Param('id_compra') id_compra: string, @Param('id_materia_prima') id_materia_prima: string, @Body() updateItemCompraDto: UpdateItemCompraDto) {
    return this.itemCompraService.update(+id_compra, +id_materia_prima, updateItemCompraDto);
  }

  @Delete(':id_compra/:id_materia_prima')
  remove(@Param('id_compra') id_compra: string, @Param('id_materia_prima') id_materia_prima: string) {
    return this.itemCompraService.remove(+id_compra, +id_materia_prima);
  }
}
