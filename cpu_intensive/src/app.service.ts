import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  cpuIntensiveTask(): string {
    const isPrime = (num: number): boolean => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };

    let count = 0;
    for (let i = 2; i < 1e6; i++) {
      if (isPrime(i)) count++;
    }

    return `Znaleziono ${count} liczb pierwszych!`;
  }
}
