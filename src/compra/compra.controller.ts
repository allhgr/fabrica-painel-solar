import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@ApiTags('Área de Compras')
@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  @ApiOperation({ summary: 'Realizar uma nova compra (Matéria Prima)' })
  @ApiResponse({ status: 201, description: 'Compra realizada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createCompraDto: CreateCompraDto) {
    return this.compraService.create(createCompraDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as compras' })
  @ApiResponse({ status: 200, description: 'Lista de compras.' })
  findAll() {
    return this.compraService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma compra por ID' })
  @ApiResponse({ status: 200, description: 'Compra encontrada.' })
  @ApiResponse({ status: 404, description: 'Compra não encontrada.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.compraService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma compra' })
  @ApiResponse({ status: 200, description: 'Compra atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Compra não encontrada.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCompraDto: UpdateCompraDto) {
    return this.compraService.update(id, updateCompraDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Cancelar uma compra' })
  @ApiResponse({ status: 200, description: 'Compra deletada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Compra não encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.compraService.remove(id);
  }
}
