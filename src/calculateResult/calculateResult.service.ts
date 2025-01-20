import { Injectable } from '@nestjs/common';
import { IIndicator } from 'interfaces/indicators';

@Injectable()
export class CalculateService {
  private readonly N = 20;
  private readonly accuracy = 0.05;

  private randomWithStep(min: number, max: number, step: number): number {
    const range = Math.floor((max - min) / step) + 1;
    const randomStep = Math.floor(Math.random() * range);
    return parseFloat((min + randomStep * step).toFixed(2));
  }

  private generateSubArray(length: number, step: number): number[] {
    const values: number[] = [];
    let remaining = 1; // Сумма должна быть равна 1

    for (let i = 0; i < length - 1; i++) {
      const max = remaining - step * (length - i - 1);
      const value = this.randomWithStep(0, max, step);
      values.push(value);
      remaining -= value;
    }

    // Добавляем последний элемент, чтобы сумма была равна 1
    values.push(parseFloat(remaining.toFixed(2)));

    return values;
  }

  private generateArray(
    parentArrayLength: number,
    subArrayLength: number,
    step: number,
  ): number[][] {
    if (subArrayLength < 2) {
      throw new Error('Длина дочернего массива должна быть не менее 2.');
    }

    const result: number[][] = [];

    for (let i = 0; i < parentArrayLength; i++) {
      const subArray = this.generateSubArray(subArrayLength, step);
      result.push(subArray);
    }

    return result;
  }

  private getFactorial(n: number): number {
    let result = 1;

    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  getResultWithWeights(
    indicators: IIndicator[],
    grades: number[],
    indicatorsLength: number,
  ) {
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

    //генерируем матрицу весов
    const weights = this.generateArray(this.N, indicatorsLength, this.accuracy);

    console.log(`weights arr`, weights);

    //фильтруем массив по условиям приоритетов
    const filteredWeights = weights.filter((w) => {
      return w.reduce((res, weight, index) => {
        if (!res || index === w.length - 1) return res;

        res = weight > w[index + 1];

        return res;
      }, true);
    });

    console.log(`filtered weights`, filteredWeights, filteredWeights.length);

    //вычисляем средние коэффициенты
    const averageWeights = [];

    for (let i = 0; i < indicatorsLength; i++) {
      const average =
        filteredWeights.reduce((acc, w) => {
          return acc + w[i];
        }, 0) / filteredWeights.length;

      averageWeights.push(+average.toFixed(2));
    }

    console.log('result', averageWeights);

    const time = performance.now() - start;

    console.log('Время выполнения = ' + time);
    console.log();
  }
}
