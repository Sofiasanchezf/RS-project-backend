import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();


  const options = new DocumentBuilder()
    .setTitle('Ribera Salud Project')
    .setDescription('Backend documentation')
    .setVersion('1.0')
    .addTag('users')
    .build();
  
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/docs', app, document);
  
  await app.listen(3000);
}
bootstrap();
