import { IsOptional, IsString, IsNumber, IsInt } from 'class-validator';

export class CreateMateriaPrimaDto {
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