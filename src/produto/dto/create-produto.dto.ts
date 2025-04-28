import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProdutoDto {
  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Painel Solar Fotovoltaico',
  })
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({
    description: 'Preço do produto',
    example: 1500.00,
  })
  @IsNumber()
  preco: number;

  @ApiProperty({
    description: 'ID da matéria-prima usada para fabricar o produto',
    example: 1,
  })
  @IsNumber()
  id_materia_prima: number;

  @ApiProperty({
    description: 'Quantidade de produtos a serem fabricados',
    example: 10,
  })
  @IsNumber()
  quantidade: number;
}
