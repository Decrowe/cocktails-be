import { Controller, Get, Param } from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CocktailDto } from './dto/cocktail.dto';

@Controller('cocktails')
export class CocktailsController {
  constructor(private readonly cocktailsService: CocktailsService) {}

  @Get()
  findAll(): CocktailDto[] {
    return this.cocktailsService.findAll();
  }

  @Get(':searchterm')
  search(@Param('searchterm') searchterm: string): CocktailDto[] {
    return this.cocktailsService.search(searchterm);
  }
}
