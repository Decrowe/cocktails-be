import { Injectable } from '@nestjs/common';
import { SessionService } from '../session/session.service';

@Injectable()
export class AuthService {
  constructor(private sessionService: SessionService) {}

  async signIn(barkeeperSecret: string) {
    return this.sessionService.secretCorrect(barkeeperSecret);
  }
}
