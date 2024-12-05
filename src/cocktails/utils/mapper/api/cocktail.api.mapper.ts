import { CocktailDTO } from 'src/cocktails/dto/cocktail.dto';
import { ingredientApiMapper } from './ingredient.api.mapper';

export function cocktailApiMapper(dto: any): CocktailDTO {
  return {
    id: dto['idDrink'],
    ingredients: ingredientApiMapper(dto),
    name: dto['strDrink'],
    imgSrc: dto['strDrinkThumb'],
  };
}
