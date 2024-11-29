import { Controller, Get, Param } from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CocktailDto } from './dto/cocktail.dto';
import { CocktailMapper } from './utils/mapper/cocktail.mapper';

@Controller('cocktails')
export class CocktailsController {
  constructor(private readonly cocktailsService: CocktailsService) {}

  @Get()
  findAll(): CocktailDto[] {
    return this.cocktailsService
      .findAll()
      .map((cocktail) => CocktailMapper.to(cocktail));
  }

  @Get(':searchterm')
  search(@Param('searchterm') searchterm: string): CocktailDto[] {
    return this.cocktailsService
      .search(searchterm)
      .map((cocktail) => CocktailMapper.to(cocktail));
  }
}
