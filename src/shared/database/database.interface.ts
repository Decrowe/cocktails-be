import { Observable } from 'rxjs';
import { CocktailDTO } from 'src/cocktails/dto/cocktail.dto';
import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
import { OrderDTO } from 'src/orders/dto/order.dto';
import { CompleteOrderDTO } from 'src/queue/dto/complete-order.dto';

export interface IDatabaseService {
  getAllCocktails(): CocktailDTO[];
  searchCocktails(serachterm: string): CocktailDTO[];

  saveCollection(cocktailIds: string[]): void;
  clearCollection(): void;
  getCocktailSelection(): CocktailDTO[];

  addOrder(createOrder: CreateOrderDto): void;
  completeOrder(completeOrder: CompleteOrderDTO): void;
  orders$: Observable<OrderDTO[]>;
}
