import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculateService } from './calculateResult/calculateResult.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CalculateService],
})
export class AppModule {}
