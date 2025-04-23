import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Fábrica Painel Solar')
    .setDescription('API para Controle de Compra e Venda de Painéis Solares.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document, 
{swaggerOptions: { defaultModelsExpandDepth: -1 }} //Essa linha desativa a Exibição de Schemas no Site do Swagger, basta exclui-lá para visualizar os Schemas/DTO's
  );

  await app.listen(3000);
}
bootstrap();