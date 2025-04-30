import { IsInt, IsOptional, IsNumber, IsString } from 'class-validator';

export class CreateItemCompraDto {
  @IsInt()
  id_compra: number;

  @IsInt()
  id_materia_prima: number;

  @IsString()
  descricao: string;

  @IsOptional()
  @IsInt()
  quantidade?: number;

  @IsOptional()
  @IsNumber()
  preco_unitario?: number;
}