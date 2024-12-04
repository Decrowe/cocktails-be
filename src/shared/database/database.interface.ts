import { Observable } from 'rxjs';
import { CocktailDto } from 'src/cocktails/dto/cocktail.dto';
import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
import { OrderDTO } from 'src/orders/dto/order.dto';
import { CompleteOrderDTO } from 'src/queue/dto/complete-order.dto';

export interface IDatabaseService {
  getAllCocktails(): CocktailDto[];
  searchCocktails(serachterm: string): CocktailDto[];

  saveCollection(cocktailIds: string[]): void;
  clearCollection(): void;
  getCocktailSelection(): CocktailDto[];

  addOrder(createOrder: CreateOrderDto): void;
  getOrders(): Observable<OrderDTO[]>;
  completeOrder(completeOrder: CompleteOrderDTO): void;
}
