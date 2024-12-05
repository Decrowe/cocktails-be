import { Observable } from 'rxjs';
import { CocktailDto } from 'src/cocktails/dto/cocktail.dto';
import { OrderDto } from 'src/orders/dto/order.dto';
import { CompleteOrderDto } from 'src/queue/dto/complete-order.dto';

export interface IDatabaseService {
  getAllCocktails(): CocktailDto[];
  getCocktailById(id: string): CocktailDto;
  searchCocktails(serachterm: string): CocktailDto[];

  saveCollection(cocktailIds: string[]): void;
  clearCollection(): void;
  getCocktailSelection(): CocktailDto[];

  addOrder(order: OrderDto): void;
  completeOrder(completeOrder: CompleteOrderDto): void;
  orders$: Observable<OrderDto[]>;
}
