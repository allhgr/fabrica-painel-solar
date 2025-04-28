import { ApiProperty } from '@nestjs/swagger';

export class VendaResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({
    example: [
      {
        quantidade: 5,
        preco_unitario: 300.0,
        produto: {
          descricao: 'Painel Solar 450W',
        },
      },
    ],
  })
  itens: {
    quantidade: number;
    preco_unitario: number;
    produto: {
      descricao: string;
    };
  }[];
}
