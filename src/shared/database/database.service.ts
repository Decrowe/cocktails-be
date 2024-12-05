import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, combineLatest, first, map, Observable, of } from 'rxjs';
import { CocktailDTO } from 'src/cocktails/dto/cocktail.dto';
import { Alphabete } from 'src/cocktails/utils/alphabete';
import { cocktailApiMapper } from 'src/cocktails/utils/mapper/api/cocktail.api.mapper';
import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
import { OrderDTO } from 'src/orders/dto/order.dto';
import { CompleteOrderDTO } from 'src/queue/dto/complete-order.dto';
import { IDatabaseService } from './database.interface';

@Injectable()
export class DatabaseService implements IDatabaseService {
  private allCocktails: CocktailDTO[] = [];
  orders$: Observable<OrderDTO[]>;

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
            return of([] as CocktailDTO[]);
          }),
        ),
    );
    const allCocktails$ = combineLatest(allCocktailsRequests).pipe(
      map((cocktailLists: CocktailDTO[][]) =>
        cocktailLists.reduce((prev, curr) => [...prev, ...curr]),
      ),
    );

    allCocktails$.pipe(first()).subscribe({
      next: (cocktails) => {
        this.allCocktails = cocktails;
        console.log(`Loaded ${cocktails.length} Cocktails!`);
      },
    });
  }

  getAllCocktails(): CocktailDTO[] {
    return this.allCocktails;
  }
  searchCocktails(serachterm: string): CocktailDTO[] {
    throw new Error('Method not implemented.');
  }
  saveCollection(cocktailIds: string[]): void {
    throw new Error('Method not implemented.');
  }
  clearCollection(): void {
    throw new Error('Method not implemented.');
  }
  getCocktailSelection(): CocktailDTO[] {
    throw new Error('Method not implemented.');
  }
  addOrder(createOrder: CreateOrderDto): void {
    throw new Error('Method not implemented.');
  }
  completeOrder(completeOrder: CompleteOrderDTO): void {
    throw new Error('Method not implemented.');
  }
}
