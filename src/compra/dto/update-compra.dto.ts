import { PartialType } from '@nestjs/mapped-types';
import { CreateCompraDto } from './create-compra.dto';
import { IsOptional, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCompraDto extends PartialType(CreateCompraDto) {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ example: 1 })
  id_usuario?: number;
}
