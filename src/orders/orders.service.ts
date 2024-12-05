import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DatabaseService } from 'src/shared/database/database.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly _databaseService: DatabaseService) {}

  create(createOrderDto: CreateOrderDto) {
    const { items, orderer } = createOrderDto;
    this._databaseService.addOrder({
      id: randomUUID(),
      timestamp: new Date(),
      orderer,
      items: items.map((value) => {
        const { cocktailId, count } = value;
        const cocktailName =
          this._databaseService.getCocktailById(cocktailId).name;
        return {
          cocktailId,
          count,
          cocktailName,
        };
      }),
    });
  }
}
