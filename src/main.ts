import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ALLOWED_CRUD_METHODS, GLOBAL_PREFIX } from './consts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONT_ENDPOINT,
    methods: ALLOWED_CRUD_METHODS,
    credentials: true,
  });

  app.setGlobalPrefix(GLOBAL_PREFIX);

  await app
    .listen(process.env.PORT)
    .then(() =>
      console.log(
        `App started at ${process.env.ROOT_ENDPOINT}:${process.env.PORT}`,
      ),
    );
}
bootstrap();
