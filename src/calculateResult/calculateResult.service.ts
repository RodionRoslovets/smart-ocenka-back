import { Injectable } from '@nestjs/common';
import { IIndicator } from 'interfaces/indicators';

@Injectable()
export class CalculateService {
  private readonly N = 20;

  getFactorial(n: number): number {
    let result = 1;

    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  getResultWithWeights(indicators: IIndicator[], grades: number[]) {
    const start = performance.now();
    if (indicators.length !== grades.length)
      throw new Error('Количество оценок и показателей не совпадает');

    if (indicators.length > this.N)
      throw new Error(
        'Количество показателей должно быть меньше либо равно 20',
      );

    if (indicators.length === 0 || grades.length === 0)
      throw new Error('Количество оценок или показателей равно 0');

    //вычисляем общее количество весов
    const weightCount =
      this.getFactorial(this.N - 1) /
      (this.getFactorial(indicators.length - 1) *
        this.getFactorial(this.N - 1 - (indicators.length - 1)));

    console.log('Weight counts ', weightCount);

    //формируем последовательность фильтров - приоритетов

    const time = performance.now() - start;

    console.log('Время выполнения = ' + time);
  }
}
