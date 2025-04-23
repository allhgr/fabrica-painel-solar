import { IsOptional, IsString, IsPhoneNumber, IsDate } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiPropertyOptional({ example: '', description: 'Nome do Cliente', type: String })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiPropertyOptional({ example: '', description: 'Telefone do Cliente (Formato BR)', type: String })
  @IsOptional()
  @IsPhoneNumber('BR')
  telefone?: string;

  @ApiPropertyOptional({ description: 'Data de Nascimento do Cliente', type: String, format: 'date' })
  @IsOptional()
  @IsDate()
  data_nascimento?: Date;
}