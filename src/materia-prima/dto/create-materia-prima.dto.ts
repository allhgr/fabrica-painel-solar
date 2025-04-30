import { IsString, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMateriaPrimaDto {
  @ApiPropertyOptional({ example: '', description: 'Nome do Cliente', type: String })
  @IsString()
  descricao: string;

  @ApiPropertyOptional({ example: 10, description: 'Nome do Cliente', type: Number })
  @IsNumber()
  preco: number;

  @ApiPropertyOptional({ example: 1, description: 'Nome do Cliente', type: Number })
  @IsNumber()
  quantidade: number;
}
