import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CardModule } from './card/Card.module';
import { CocktailsModule } from './cocktails/cocktails.module';
import { OrdersModule } from './orders/orders.module';
import { QueueModule } from './queue/queue.module';
import { SesionModule } from './session/session.module';

@Module({
  imports: [
    CocktailsModule,
    QueueModule,
    CardModule,
    OrdersModule,
    AuthModule,
    SesionModule,
  ],
  controllers: [],
  exports: [],
})
export class AppModule {}
