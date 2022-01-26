import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHealthy() {
    return 'Hello World!';
  }
}
