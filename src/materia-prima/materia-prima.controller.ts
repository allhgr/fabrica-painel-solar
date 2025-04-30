import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { MateriaPrimaService } from './materia-prima.service';
import { CreateMateriaPrimaDto } from './dto/create-materia-prima.dto';
import { UpdateMateriaPrimaDto } from './dto/update-materia-prima.dto';

@ApiTags('Matérias Primas')
@Controller('materias-primas')
export class MateriaPrimaController {
  constructor(private readonly materiaPrimaService: MateriaPrimaService) { }

  @Post()
  @ApiOperation({ summary: 'Injetar matéria-prima no sistema' })
  @ApiResponse({ status: 201, description: 'Matéria-prima criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createMateriaPrimaDto: CreateMateriaPrimaDto) {
    return this.materiaPrimaService.create(createMateriaPrimaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as matérias-primas' })
  @ApiResponse({ status: 200, description: 'Lista de materias-primas.' })
  findAll() {
    return this.materiaPrimaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma matéria-prima por ID' })
  @ApiParam({ name: 'id', description: 'ID da matéria-prima', type: Number })
  @ApiResponse({ status: 200, description: 'Matéria-prima encontrada.' })
  @ApiResponse({ status: 404, description: 'Matéria-prima não encontrada.' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const produto = await this.materiaPrimaService.findOne(id);
    if (!produto) {
      throw new NotFoundException(`Matéria-prima com ID ${id} não encontrada`);
    }
    return produto;
  }

  //@Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma matéria-prima' })
  @ApiParam({ name: 'id', description: 'ID da matéria-prima', type: Number })
  @ApiResponse({ status: 200, description: 'Matéria-prima atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Matéria-prima não encontrada.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMateriaPrimaDto: UpdateMateriaPrimaDto) {
    return this.materiaPrimaService.update(id, updateMateriaPrimaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma matéria-prima' })
  @ApiParam({ name: 'id', description: 'ID da matéria-prima', type: Number })
  @ApiResponse({ status: 200, description: 'Matéria-prima deletado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Matéria-prima não encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.materiaPrimaService.remove(id);
  }
}
