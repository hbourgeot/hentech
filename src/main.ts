import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('HenTech API')
    .setDescription('HenTech API for project organization')
    .setVersion('1.0')
    .addTag('employee', 'Employee API')
    .addTag('projects', 'Projects API')
    .addTag('tasks', 'Tasks API')
    .addTag('docs', 'Documents API')
    .addTag('version', 'Document Versions API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
