import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('so-api');
  await app.listen(process.env.PORT ?? 2000);
}
bootstrap();
