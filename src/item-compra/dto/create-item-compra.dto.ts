import { IsInt, IsOptional, IsNumber } from 'class-validator';

export class CreateItemCompraDto {
  @IsInt()
  id_compra: number;

  @IsInt()
  id_materia_prima: number;

  @IsOptional()
  @IsInt()
  quantidade?: number;

  @IsOptional()
  @IsNumber()
  preco_unitario?: number;
}