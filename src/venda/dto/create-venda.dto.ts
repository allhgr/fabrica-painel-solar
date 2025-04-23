import { IsInt, IsOptional, IsDate } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVendaDto {
  
  @ApiPropertyOptional({ example: 1, description: 'Id do Cliente', type: Number })
  @IsInt()
  id_cliente: number;
  
  @ApiPropertyOptional({ example: 1, description: 'Id do Usuário', type: Number })
  @IsInt()
  id_usuario: number;

  @ApiPropertyOptional({ description: 'Data da Venda', type: String, format: 'date' })
  @IsOptional()
  @IsDate()
  data_venda?: Date;
}