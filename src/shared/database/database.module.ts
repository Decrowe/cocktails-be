import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  imports: [HttpModule],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
