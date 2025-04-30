import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MateriaPrimaModule } from 'src/materia-prima/materia-prima.module';

@Module({
  imports: [PrismaModule, MateriaPrimaModule],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [ProdutoService],
})
export class ProdutoModule {}
