import { IsOptional, IsString, IsNumber, IsInt } from 'class-validator';

export class CreateProdutoDto {
  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsNumber()
  preco?: number;

  @IsOptional()
  @IsInt()
  quantidade?: number;
}