import { IngredientDTO } from './ingredient.dto';

export class CocktailDTO {
  id: string;
  name: string;
  imgSrc?: string;
  ingredients: IngredientDTO[];
}
