import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ALLOWED_CRUD_METHODS, FRONT_ENDPOINT, GLOBAL_PREFIX } from './consts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: FRONT_ENDPOINT,
    methods: ALLOWED_CRUD_METHODS,
    credentials: true,
  });

  app.setGlobalPrefix(GLOBAL_PREFIX);

  await app.listen(process.env.PORT);
}

bootstrap();
