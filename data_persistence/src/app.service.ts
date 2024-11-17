import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  saveData(message: string): string {
    const filePath = path.join(__dirname, 'data.txt');
    fs.appendFileSync(filePath, `${message}\n`);
    return 'Data saved!';
  }
}
