import { Module } from '@nestjs/common';
import { SesionModule } from 'src/session/session.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [SesionModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
