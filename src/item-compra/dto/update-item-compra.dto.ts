import { PartialType } from '@nestjs/swagger';
import { CreateItemCompraDto } from './create-item-compra.dto';

export class UpdateItemCompraDto extends PartialType(CreateItemCompraDto) {}
