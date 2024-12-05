import { CocktailDto } from 'src/cocktails/dto/cocktail.dto';
import { ingredientApiMapper } from './ingredient.api.mapper';

export function cocktailApiMapper(dto: any): CocktailDto {
  return {
    id: dto['idDrink'],
    ingredients: ingredientApiMapper(dto),
    name: dto['strDrink'],
    imgSrc: dto['strDrinkThumb'],
  };
}
