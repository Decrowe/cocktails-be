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
  private _cocktailCard: string[] = [];
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
  getCocktailCard(): CocktailDto[] {
    return this.allCocktails.filter((cocktail) =>
      this._cocktailCard.includes(cocktail.id),
    );
  }
  searchCocktails(searchterm: string): CocktailDto[] {
    return this.allCocktails.filter((cocktail) =>
      cocktail.name
        .replaceAll(' ', '')
        .toUpperCase()
        .includes(searchterm.replaceAll(' ', '').toUpperCase()),
    );
  }
  saveCard(cocktailIds: string[]): void {
    this._cocktailCard = cocktailIds;
  }
  clearCard(): void {
    this._cocktailCard = [];
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
