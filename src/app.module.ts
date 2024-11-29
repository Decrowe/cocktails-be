import { Module } from '@nestjs/common';
import { CocktailsModule } from './cocktails/cocktails.module';
import { CollectionModule } from './collection/collection.module';
import { OrdersModule } from './orders/orders.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [CocktailsModule, QueueModule, CollectionModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
