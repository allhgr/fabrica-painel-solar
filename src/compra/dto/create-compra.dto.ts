import { IsInt, IsOptional, IsDate } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCompraDto {

  @ApiPropertyOptional({ example: 1, description: 'Id do Fornecedor', type: Number })
  @IsInt()
  id_fornecedor: number;

  @ApiPropertyOptional({ example: 1, description: 'Id do Usuário', type: Number })
  @IsInt()
  id_usuario: number;

  @ApiPropertyOptional({ description: 'Data da Venda', type: String, format: 'date' })
  @IsOptional()
  @IsDate()
  data_compra?: Date;
}