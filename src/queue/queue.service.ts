import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/shared/database/database.service';
import { CompleteOrderDto } from './dto/complete-order.dto';

@Injectable()
export class QueueService {
  constructor(private readonly _databaseService: DatabaseService) {}
  orders$ = this._databaseService.orders$;

  complete(completeOrder: CompleteOrderDto) {
    this._databaseService.completeOrder(completeOrder);
  }

  getCurrent() {
    return this._databaseService.getCurrent();
  }
}
