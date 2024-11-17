import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  simulateCpuLoad(): string {
    const start = Date.now();
    while (Date.now() - start < 10000) {
      Math.sqrt(Math.random());
    }
    return 'CPU load simulated for 10 seconds!';
  }
}
