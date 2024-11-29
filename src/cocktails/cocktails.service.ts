import { Injectable } from '@nestjs/common';
import { CocktailDto } from './dto/cocktail.dto';

@Injectable()
export class CocktailsService {
  findAll(): CocktailDto[] {
    return [];
  }

  search(searchterm: string): CocktailDto[] {
    return [];
  }
}
