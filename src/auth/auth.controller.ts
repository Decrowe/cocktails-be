import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('barkeeperLogin')
  signIn(@Body() barkeeperSecret: string) {
    return this.authService.signIn(barkeeperSecret);
  }
}
