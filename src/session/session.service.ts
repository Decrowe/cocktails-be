import { Injectable } from '@nestjs/common';
import { createHash, Hash, randomInt } from 'crypto';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class SessionService {
  private barkeeperSecret: Hash | undefined = undefined;
  private sessionId: number | undefined = undefined;

  createSession(barkeeperSecret: string): number {
    this.barkeeperSecret = createHash(barkeeperSecret);
    this.sessionId = randomInt(0, 9999);
    return this.sessionId;
  }

  secretCorrect(secret: string) {
    return this.barkeeperSecret === createHash(secret);
  }
}
