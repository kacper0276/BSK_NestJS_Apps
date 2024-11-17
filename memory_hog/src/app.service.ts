import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private memoryLeak = [];

  consumeMemory(): string {
    for (let i = 0; i < 1e7; i++) {
      this.memoryLeak.push(Buffer.alloc(1024));
    }
    return 'Memory usage increased!';
  }
}
