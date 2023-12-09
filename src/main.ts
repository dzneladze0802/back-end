import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ALLOWED_CRUD_METHODS, GLOBAL_PREFIX } from './consts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: ALLOWED_CRUD_METHODS,
    credentials: true,
  });

  app.setGlobalPrefix(GLOBAL_PREFIX);

  await app.listen(process.env.PORT);
}

bootstrap();
