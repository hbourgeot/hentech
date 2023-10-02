import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const startTime = process.hrtime();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger();

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('HenTech API')
    .setDescription('HenTech API for project organization')
    .setVersion('1.0')
    .addTag('auth', 'Auth API')
    .addTag('employee', 'Employee API')
    .addTag('projects', 'Projects API')
    .addTag('tasks', 'Tasks API')
    .addTag('docs', 'Documents API')
    .addTag('version', 'Document Versions API')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3030);

  const endTime = process.hrtime(startTime);
  const started = (endTime[0] * 1000 + endTime[1] / 1e6).toFixed(2);
  
  logger.log(`Application started successfully in ${started}ms`)
}
bootstrap();
