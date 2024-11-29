import { Controller, Get, Param } from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CocktailDto } from './dto/cocktail.dto';
import { CocktailMapper } from './utils/mapper/cocktail.mapper';

@Controller('cocktails')
export class CocktailsController {
  constructor(private readonly cocktailsService: CocktailsService) {}

  @Get()
  getCocktails(): CocktailDto[] {
    return this.cocktailsService
      .getAll()
      .map((cocktail) => CocktailMapper.to(cocktail));
  }

  @Get(':searchterm')
  searchCocktails(@Param('searchterm') searchterm: string): CocktailDto[] {
    return this.cocktailsService
      .search(searchterm)
      .map((cocktail) => CocktailMapper.to(cocktail));
  }
}
