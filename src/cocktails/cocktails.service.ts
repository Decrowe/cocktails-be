import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { Cocktail } from './entities/cocktail.entity';
import { Alphabete } from './utils/alphabete';
import { cocktailApiMapper } from './utils/mapper/api/cocktail.api.mapper';

@Injectable()
export class CocktailsService {
  private _allCocktails: Cocktail[] = [];

  private _allCocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([]);
  public allCocktails$: Observable<Cocktail[]> =
    this._allCocktails$.asObservable();

  constructor(private http: HttpService) {
    this.getAllCocktails()
      .pipe(first())
      .subscribe({
        next: (cocktails) => {
          this._allCocktails = cocktails;
          this._allCocktails$.next(cocktails);
          console.log(`Loaded ${cocktails.length} Cocktails!`);
        },
      });
  }

  private getAllCocktails() {
    const allCocktailsRequests = Alphabete.map((letter) =>
      this.http
        .get(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter,
        )
        .pipe(
          map((response: any) => response['data']['drinks']),
          map((dtos: any[]) => dtos.map((dto) => cocktailApiMapper(dto))),
          catchError((error) => {
            return of([] as Cocktail[]);
          }),
        ),
    );
    const allCocktails$ = combineLatest(allCocktailsRequests).pipe(
      map((cocktailLists: Cocktail[][]) =>
        cocktailLists.reduce((prev, curr) => [...prev, ...curr]),
      ),
    );

    return allCocktails$;
  }

  findAll(): Cocktail[] {
    return this._allCocktails;
  }

  search(searchterm: string): Cocktail[] {
    return this._allCocktails.filter((cocktail) =>
      cocktail.name
        .replaceAll(' ', '')
        .toUpperCase()
        .includes(searchterm.replaceAll(' ', '').toUpperCase()),
    );
  }
}
