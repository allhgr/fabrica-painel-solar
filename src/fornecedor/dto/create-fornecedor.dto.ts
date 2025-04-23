import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFornecedorDto {
  
  @ApiPropertyOptional({ example: '', description: 'Nome do Fornecedor', type: String })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiPropertyOptional({ example: '', description: 'Tipo do Fornecimento', type: String })
  @IsOptional()
  @IsString()
  tipo_fornecimento?: string;

  @ApiPropertyOptional({ example: '', description: 'Região do Fornecedor', type: String })
  @IsOptional()
  @IsString()
  localidade?: string;
}
