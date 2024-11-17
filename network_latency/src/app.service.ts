import { Injectable } from '@nestjs/common';
import * as axios from 'axios';

@Injectable()
export class AppService {
  async measureLatency(): Promise<string> {
    const start = Date.now();
    await axios.default.get('https://jsonplaceholder.typicode.com/posts');
    const latency = Date.now() - start;
    return `Network latency measured: ${latency} ms`;
  }
}
