import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  private readonly filePath = path.join(__dirname, 'large-file.txt');

  performDiskIo(): string {
    const data = 'A'.repeat(1024 * 1024);
    for (let i = 0; i < 100; i++) {
      fs.appendFileSync(this.filePath, data);
    }

    const content = fs.readFileSync(this.filePath, 'utf-8');

    fs.unlinkSync(this.filePath);

    return `Zapisano i odczytano plik o rozmiarze ${content.length} znaków`;
  }
}
