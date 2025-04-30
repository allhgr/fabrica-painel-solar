import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ItemCompraDto {
  @IsOptional()
  @IsNumber()
  id_materia_prima?: number;

  @ApiProperty({ example: 'Matéria Prima', description: 'Placa Solar', required: false, })
  @IsOptional()
  @IsString()
  descricao: string;

  @ApiProperty({ example: 50, description: 'Quantidade da matéria-prima', })
  @IsNumber()
  quantidade: number;

  @ApiProperty({ example: 150, description: 'Preço unitário da matéria-prima', })
  @IsNumber()
  preco_unitario: number;
}
