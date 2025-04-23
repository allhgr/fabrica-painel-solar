import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@ApiTags('Área de Compras')
@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova compra' })
  create(@Body() createCompraDto: CreateCompraDto) {
    return this.compraService.create(createCompraDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as compras' })
  findAll() {
    return this.compraService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma compra por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.compraService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma compra' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCompraDto: UpdateCompraDto) {
    return this.compraService.update(id, updateCompraDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Cancelar uma compra' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.compraService.remove(id);
  }
}
