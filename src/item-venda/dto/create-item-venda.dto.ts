import { IsInt, IsOptional, IsNumber } from 'class-validator';

export class CreateItemVendaDto {
  @IsInt()
  id_venda: number;

  @IsInt()
  id_produto: number;

  @IsOptional()
  @IsInt()
  quantidade?: number;

  @IsOptional()
  @IsNumber()
  preco_unitario?: number;
}
