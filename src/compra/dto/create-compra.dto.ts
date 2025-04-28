import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { ItemCompraDto } from './item-compra.dto';

export class CreateCompraDto {
  @ApiProperty({
    example: 1,
    description: 'ID do usuário que está realizando a compra',
  })
  @IsNumber()
  id_usuario: number;

  @ApiProperty({
    example: 2,
    description: 'ID do fornecedor da compra',
  })
  @IsNumber()
  id_fornecedor: number;

  @ApiProperty({
    example: '2025-04-28T00:00:00.000Z',
    description: 'Data da compra',
  })
  @IsDate()
  @Type(() => Date)
  data_compra: Date;

  @ApiProperty({
    type: [ItemCompraDto],
    description: 'Lista de itens da compra',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemCompraDto)
  itens: ItemCompraDto[];
}
