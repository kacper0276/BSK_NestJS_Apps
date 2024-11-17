import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  performDiskIo(): string {
    const filePath = path.join(__dirname, 'io_test.txt');
    for (let i = 0; i < 1000; i++) {
      fs.writeFileSync(filePath, `Disk I/O test - ${i}\n`, { flag: 'a' });
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    fs.unlinkSync(filePath);
    return `Performed disk I/O with 1000 writes and reads. Data size: ${data.length} bytes.`;
  }
}
