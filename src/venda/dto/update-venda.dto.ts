import { PartialType } from '@nestjs/mapped-types';
import { CreateVendaDto } from './create-venda.dto';
import { IsOptional, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateVendaDto extends PartialType(CreateVendaDto) {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ example: 2 })
  id_cliente?: number;
}
