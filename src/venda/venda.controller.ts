import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { VendaService } from './venda.service';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';

@ApiTags('Área de Vendas')
@Controller('vendas')
export class VendaController {
  constructor(private readonly vendaService: VendaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova venda' })
  create(@Body() createVendaDto: CreateVendaDto) {
    return this.vendaService.create(createVendaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as vendas' })
  findAll() {
    return this.vendaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma venda por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vendaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma venda' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateVendaDto: UpdateVendaDto) {
    return this.vendaService.update(id, updateVendaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Cancelar uma venda' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vendaService.remove(id);
  }
}
