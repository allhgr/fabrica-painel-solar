import { IsString, IsNumber } from 'class-validator';

export class CreateMateriaPrimaDto {
  @IsString()
  descricao: string;

  @IsNumber()
  preco: number;

  @IsNumber()
  quantidade: number;
}
