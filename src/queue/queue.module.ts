import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/shared/database/database.module';
import { QueueGateway } from './queue.gateway';
import { QueueService } from './queue.service';

@Module({
  providers: [QueueGateway, QueueService],
  imports: [DatabaseModule],
})
export class QueueModule {}
