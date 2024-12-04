import { Cocktail } from 'src/cocktails/entities/cocktail.entity';
import { ingredientApiMapper } from './ingredient.api.mapper';

export function cocktailApiMapper(dto: any): Cocktail {
  return {
    id: dto['idDrink'],
    ingredients: ingredientApiMapper(dto),
    name: dto['strDrink'],
    imgSrc: dto['strDrinkThumb'],
  };
}
