import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';
import { OrderDTO } from 'src/orders/dto/order.dto';
import { CompleteOrderDTO } from './dto/complete-order.dto';

@Injectable()
export class QueueService {
  private _queue$ = new BehaviorSubject<OrderDTO[]>([]);
  queue$ = this._queue$.asObservable();

  constructor() {
    setInterval(() => {
      const order: OrderDTO = {
        id: '1',
        items: [],
        orderer: 'Lukas',
        timestamp: new Date(),
      };
      this._queue$.next([order]);
    }, 1000);
  }

  complete(completeOrder: CompleteOrderDTO) {
    throw new Error('Method not implemented.');
  }
}
