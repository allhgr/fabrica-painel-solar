import { Module } from '@nestjs/common';
import { ItemCompraService } from './item-compra.service';
import { ItemCompraController } from './item-compra.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ItemCompraController],
  providers: [ItemCompraService],
})
export class ItemCompraModule {}
