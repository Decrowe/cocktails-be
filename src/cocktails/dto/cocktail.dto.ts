import { IngredientDto } from './ingredient.dto';

export class CocktailDto {
  id: string;
  name: string;
  imgSrc?: string;
  ingredients: IngredientDto[];
}
