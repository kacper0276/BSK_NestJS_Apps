import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const filePath = path.join('/tmp', 'io-test.txt');
    for (let i = 0; i < 100000; i++) {
      fs.writeFileSync(filePath, 'Data for testing I/O performance');
      fs.readFileSync(filePath, 'utf-8');
    }

    return 'DISK I/O operations completed';
  }
}
