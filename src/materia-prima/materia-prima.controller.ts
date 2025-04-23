import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MateriaPrimaService } from './materia-prima.service';
import { CreateMateriaPrimaDto } from './dto/create-materia-prima.dto';
import { UpdateMateriaPrimaDto } from './dto/update-materia-prima.dto';

@ApiTags('Matérias Primas')
@Controller('materias-primas')
export class MateriaPrimaController {
  constructor(private readonly materiaPrimaService: MateriaPrimaService) {}

  @Post()
  @ApiOperation({ summary: 'Comprar uma nova matéria-prima' })
  create(@Body() createMateriaPrimaDto: CreateMateriaPrimaDto) {
    return this.materiaPrimaService.create(createMateriaPrimaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as matérias-primas' })
  findAll() {
    return this.materiaPrimaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma matéria-prima por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.materiaPrimaService.findOne(id);
  }

  //@Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma matéria-prima' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMateriaPrimaDto: UpdateMateriaPrimaDto) {
    return this.materiaPrimaService.update(id, updateMateriaPrimaDto);
  }

  //@Delete(':id')
  @ApiOperation({ summary: 'Deletar uma matéria-prima' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.materiaPrimaService.remove(id);
  }
}
