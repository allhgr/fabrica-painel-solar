import { Module } from '@nestjs/common';
import { MateriaPrimaService } from './materia-prima.service';
import { MateriaPrimaController } from './materia-prima.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MateriaPrimaController],
  providers: [MateriaPrimaService],
})
export class MateriaPrimaModule {}
