import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  saveData(@Body() body: { message: string }): string {
    return this.appService.saveData(body.message);
  }
}
