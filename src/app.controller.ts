import { Request } from 'express';
import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/serviceB')
  getHello(@Req() req: Request): string {
    console.log(req);
    return this.appService.getHello();
  }
}
