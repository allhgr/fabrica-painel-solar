import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { FornecedorService } from './fornecedor.service';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';

@ApiTags('Fornecedores')
@Controller('fornecedores')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo fornecedor' })
  @ApiResponse({ status: 201, description: 'Fornecedor criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createFornecedorDto: CreateFornecedorDto) {
    return this.fornecedorService.create(createFornecedorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os fornecedores' })
  @ApiResponse({ status: 200, description: 'Lista de fornecedores.' })
  findAll() {
    return this.fornecedorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um fornecedor por ID' })
  @ApiParam({ name: 'id', description: 'ID do fornecedor', type: Number })
  @ApiResponse({ status: 200, description: 'Fornecedor encontrado.' })
  @ApiResponse({ status: 404, description: 'Fornecedor não encontrado.' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const fornecedor = await this.fornecedorService.findOne(id);
    if (!fornecedor) {
      throw new NotFoundException(`Fornecedor com ID ${id} não encontrado`);
    }
    return fornecedor;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um fornecedor' })
  @ApiParam({ name: 'id', description: 'ID do fornecedor', type: Number })
  @ApiResponse({ status: 200, description: 'Fornecedor atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Fornecedor não encontrado.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFornecedorDto: UpdateFornecedorDto) {
    return this.fornecedorService.update(id, updateFornecedorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um fornecedor' })
  @ApiParam({ name: 'id', description: 'ID do fornecedor', type: Number })
  @ApiResponse({ status: 200, description: 'Fornecedor deletado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Fornecedor não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.fornecedorService.remove(id);
  }
}
