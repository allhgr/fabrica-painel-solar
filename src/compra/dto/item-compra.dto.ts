import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ItemCompraDto {
  @IsOptional()
  @IsNumber()
  id_materia_prima?: number;

  @ApiProperty({
    example: 'Silício Ultra Puro',
    description: 'Descrição da nova matéria-prima (opcional)',
    required: false,
  })
  @IsOptional()
  @IsString()
  descricao?: string;

  @ApiProperty({
    example: 10,
    description: 'Quantidade da matéria-prima',
  })
  @IsNumber()
  quantidade: number;

  @ApiProperty({
    example: 15.5,
    description: 'Preço unitário da matéria-prima',
  })
  @IsNumber()
  preco_unitario: number;
}
