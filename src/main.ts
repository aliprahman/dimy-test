import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './utils/all-exception-filter';
import { SuccessResponse } from './interceptors/success-response';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new SuccessResponse());

  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public/',
  });
  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
