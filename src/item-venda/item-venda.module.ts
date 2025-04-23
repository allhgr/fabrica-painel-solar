import { Module } from '@nestjs/common';
import { ItemVendaService } from './item-venda.service';
import { ItemVendaController } from './item-venda.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ItemVendaController],
  providers: [ItemVendaService],
})
export class ItemVendaModule {}
