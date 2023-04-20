import { NestFactory } from '@nestjs/core';

import * as cors from 'cors';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  app.use(
    cors({
      origin: 'http://localhost:3000', // replace with your client URL
    }),
  );
  await app.listen(3002);
}
bootstrap();
