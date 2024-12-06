import { Controller, Get, Param } from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CocktailDto } from './dto/cocktail.dto';

@Controller('cocktails')
export class CocktailsController {
  constructor(private readonly cocktailsService: CocktailsService) {}

  @Get()
  getAll(): CocktailDto[] {
    return this.cocktailsService.getAll();
  }
  @Get('/card')
  getCard(): CocktailDto[] {
    return this.cocktailsService.getCard();
  }

  @Get(':searchterm')
  search(@Param('searchterm') searchterm: string): CocktailDto[] {
    return this.cocktailsService.search(searchterm);
  }
}
