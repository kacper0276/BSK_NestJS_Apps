import { Injectable } from '@nestjs/common';
import { Worker } from 'worker_threads';

@Injectable()
export class AppService {
  simulateCpuStress(): string {
    const workers = Array.from({ length: 8 }, () => new Worker('./worker.js'));
    workers.forEach((worker) => worker.terminate());
    return 'Simulated high resource usage!';
  }
}
