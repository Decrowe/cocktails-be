import { Observable } from 'rxjs';
import { CocktailDto } from 'src/cocktails/dto/cocktail.dto';
import { OrderDto } from 'src/orders/dto/order.dto';
import { CompleteOrderDto } from 'src/queue/dto/complete-order.dto';

export interface IDatabaseService {
  getAllCocktails(): CocktailDto[];
  getCocktailCard(): CocktailDto[];
  getCocktailById(id: string): CocktailDto;
  searchCocktails(searchterm: string): CocktailDto[];

  saveCard(cocktailIds: string[]): void;
  clearCard(): void;

  addOrder(order: OrderDto): void;
  completeOrder(completeOrder: CompleteOrderDto): void;
  orders$: Observable<OrderDto[]>;
}
