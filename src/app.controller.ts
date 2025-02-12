import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
  ) {}

  @Get('/')
  getMain(): string {
    return this.appService.getHello();
  }

  // @Get('/')
  // getHello2(): string {
  //   console.log(this.config.get('TEST'));

  //   return 'HELLO BITCH';
  // }
}
