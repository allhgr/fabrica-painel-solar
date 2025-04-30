import { Module, forwardRef } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MateriaPrimaModule } from 'src/materia-prima/materia-prima.module';
import { ProdutoModule } from 'src/produto/produto.module';

@Module({
  imports: [PrismaModule, MateriaPrimaModule, ProdutoModule],
  controllers: [EstoqueController],
  providers: [EstoqueService],
})
export class EstoqueModule {}
