import { IsInt } from 'class-validator';

export class CreateEstoqueDto {
  @IsInt()
  id_produto: number;

  @IsInt()
  id_materia_prima: number;
}