import { ApiProperty } from '@nestjs/swagger';

export class CompraResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({
    example: [
      {
        quantidade: 10,
        preco_unitario: 15.5,
        materiaPrima: {
          descricao: 'Silício Puro',
        },
      },
    ],
  })
  itens: {
    quantidade: number;
    preco_unitario: number;
    materiaPrima: {
      descricao: string;
    };
  }[];
}
