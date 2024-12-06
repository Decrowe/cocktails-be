import { Module } from '@nestjs/common';
import { CardModule } from './card/Card.module';
import { CocktailsModule } from './cocktails/cocktails.module';
import { OrdersModule } from './orders/orders.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [CocktailsModule, QueueModule, CardModule, OrdersModule],
  controllers: [],
  exports: [],
})
export class AppModule {}
