import { IsOptional, IsString, IsDate, IsPhoneNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiPropertyOptional({ example: '', description: 'Nome do Usuário', type: String })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiPropertyOptional({ description: 'Data de Nascimento do Usuário', type: String, format: 'date' })
  @IsOptional()
  @IsDate()
  data_nascimento?: Date;

  @ApiPropertyOptional({ example: '', description: 'Telefone do Usuário (Formato BR)', type: String })
  @IsOptional()
  @IsPhoneNumber('BR')
  telefone?: string;

  @ApiPropertyOptional({ example: 'Gerente/Auxiliar/Financeiro/Vendedor', description: 'Função do Usuário', type: String })
  @IsOptional()
  @IsString()
  funcao?: string;
}
