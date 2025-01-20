import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculateService } from './calculateResult/calculateResult.service';
import {
  INDICATORS,
  MOC_GRADES_ANDY_1,
  MOC_INDICATORS_DATA_ANDY,
} from './utils/moc';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly calculate: CalculateService,
  ) {}

  @Get()
  getHello(): string {
    this.calculate.getResultWithWeights(
      MOC_INDICATORS_DATA_ANDY,
      MOC_GRADES_ANDY_1,
      INDICATORS.length,
    );

    return 'Hello World!!!!!';
  }
}
