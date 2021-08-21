import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // 사용하고 싶은 파이프를 NestJS어플리케이션에게 넘겨준다.
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // 유저들이 보낸 값을 원하는 실제 type으로 변환
      transform: true
    })
  )
  await app.listen(3000);
}
bootstrap();

