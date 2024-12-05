import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  first,
  map,
  Observable,
  of,
} from 'rxjs';
import { CocktailDto } from 'src/cocktails/dto/cocktail.dto';
import { Alphabete } from 'src/cocktails/utils/alphabete';
import { cocktailApiMapper } from 'src/cocktails/utils/mapper/api/cocktail.api.mapper';
import { OrderDto } from 'src/orders/dto/order.dto';
import { CompleteOrderDto } from 'src/queue/dto/complete-order.dto';
import { IDatabaseService } from './database.interface';

@Injectable()
export class DatabaseService implements IDatabaseService {
  private allCocktails: CocktailDto[] = [];
  private _orders: BehaviorSubject<OrderDto[]> = new BehaviorSubject<
    OrderDto[]
  >([]);
  orders$: Observable<OrderDto[]> = this._orders.asObservable();

  constructor(private http: HttpService) {
    this.loadCocktailsInitial();
  }

  private loadCocktailsInitial() {
    const allCocktailsRequests = Alphabete.map((letter) =>
      this.http
        .get(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter,
        )
        .pipe(
          map((response: any) => response['data']['drinks']),
          map((dtos: any[]) => dtos.map((dto) => cocktailApiMapper(dto))),
          catchError((error) => {
            return of([] as CocktailDto[]);
          }),
        ),
    );
    const allCocktails$ = combineLatest(allCocktailsRequests).pipe(
      map((cocktailLists: CocktailDto[][]) =>
        cocktailLists.reduce((prev, curr) => [...prev, ...curr]),
      ),
    );

    allCocktails$.pipe(first()).subscribe({
      next: (cocktails) => {
        this.allCocktails = cocktails;
        console.info(`Loaded ${cocktails.length} Cocktails!`);
      },
    });
  }

  getCocktailById(id: string): CocktailDto {
    return this.allCocktails.find((value) => value.id === id);
  }

  getAllCocktails(): CocktailDto[] {
    return this.allCocktails;
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
  addOrder(order: OrderDto): void {
    this._orders.next([...this._orders.value, order]);
  }

  private removeOrderFromQueue(id: string) {
    const orders = this._orders.value;
    const removed = orders.filter((order) => order.id !== id);
    this._orders.next(removed);
  }

  completeOrder(completeOrder: CompleteOrderDto): void {
    this.removeOrderFromQueue(completeOrder.id);
  }
}
