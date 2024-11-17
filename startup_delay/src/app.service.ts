import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private startTime: number;

  constructor() {
    this.startTime = Date.now();
  }

  getStartupTime(): string {
    const delay = Date.now() - this.startTime;
    return `Startup time: ${delay}ms`;
  }
}
