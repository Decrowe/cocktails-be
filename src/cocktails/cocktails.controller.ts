import { Controller, Get, Param } from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CocktailDTO } from './dto/cocktail.dto';

@Controller('cocktails')
export class CocktailsController {
  constructor(private readonly cocktailsService: CocktailsService) {}

  @Get()
  findAll(): CocktailDTO[] {
    return this.cocktailsService.getAll();
  }

  @Get(':searchterm')
  search(@Param('searchterm') searchterm: string): CocktailDTO[] {
    return this.cocktailsService.search(searchterm);
  }
}
