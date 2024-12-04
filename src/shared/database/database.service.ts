import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CocktailDto } from 'src/cocktails/dto/cocktail.dto';
import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
import { OrderDTO } from 'src/orders/dto/order.dto';
import { CompleteOrderDTO } from 'src/queue/dto/complete-order.dto';
import { IDatabaseService } from './database.interface';

@Injectable()
export class DatabaseService implements IDatabaseService {
  getAllCocktails(): CocktailDto[] {
    throw new Error('Method not implemented.');
  }
  searchCocktails(serachterm: string): CocktailDto[] {
    throw new Error('Method not implemented.');
  }
  saveCollection(cocktailIds: string[]): void {
    throw new Error('Method not implemented.');
  }
  clearCollection(): void {
    throw new Error('Method not implemented.');
  }
  getCocktailSelection(): CocktailDto[] {
    throw new Error('Method not implemented.');
  }
  addOrder(createOrder: CreateOrderDto): void {
    throw new Error('Method not implemented.');
  }
  getOrders(): Observable<OrderDTO[]> {
    throw new Error('Method not implemented.');
  }
  completeOrder(completeOrder: CompleteOrderDTO): void {
    throw new Error('Method not implemented.');
  }
}
