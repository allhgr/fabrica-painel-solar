import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVendaDto {
  @ApiProperty({ example: 1 })
  id_usuario: number;

  @ApiProperty({ example: 2 })
  id_cliente: number;

  @ApiPropertyOptional({ example: '2025-04-28T17:00:00.000Z' })
  data_venda?: Date;

  @ApiProperty({ example: [
    {
        id_produto: 1,
        quantidade: 5,
        preco_unitario: 300.0,
      },
    ],
  })
  itens: {
    id_produto: number;
    quantidade: number;
    preco_unitario: number;
  }[];
}
