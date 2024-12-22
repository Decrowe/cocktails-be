import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  @HttpCode(HttpStatus.OK)
  @Post('create')
  signIn(@Body() barkeeperSecret: string): number {
    return this.sessionService.createSession(barkeeperSecret);
  }
}
