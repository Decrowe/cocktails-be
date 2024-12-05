import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/shared/database/database.service';
import { CocktailDto } from './dto/cocktail.dto';

@Injectable()
export class CocktailsService {
  constructor(private _db: DatabaseService) {}

  getAll(): CocktailDto[] {
    return this._db.getAllCocktails();
  }

  search(searchterm: string): CocktailDto[] {
    return this._db
      .getAllCocktails()
      .filter((cocktail) =>
        cocktail.name
          .replaceAll(' ', '')
          .toUpperCase()
          .includes(searchterm.replaceAll(' ', '').toUpperCase()),
      );
  }
}
