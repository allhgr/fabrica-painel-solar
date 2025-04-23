import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutoModule } from './produto/produto.module';
import { VendaModule } from './venda/venda.module';
import { ItemVendaModule } from './item-venda/item-venda.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { MateriaPrimaModule } from './materia-prima/materia-prima.module';
import { CompraModule } from './compra/compra.module';
import { ItemCompraModule } from './item-compra/item-compra.module';
import { EstoqueModule } from './estoque/estoque.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule, 
    UsuarioModule, 
    ClienteModule,
    FornecedorModule, 
    VendaModule, 
    ItemVendaModule,  
    CompraModule, 
    ItemCompraModule,
    MateriaPrimaModule, 
    ProdutoModule, 
    EstoqueModule
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
