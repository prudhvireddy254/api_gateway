import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { GlobalHttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  // Pass the generic type correctly instead of casting with "as"
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors();
  app.useGlobalFilters(new GlobalHttpExceptionFilter());

  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
  
  console.log(`API Gateway listening on port ${port} 🚀 (Running on Fastify)`);
}

bootstrap().catch((err) => {
  console.error('Failed to bootstrap api-gateway:', err);
});
