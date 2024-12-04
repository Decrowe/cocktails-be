import { Ingredient } from './ingredient.entity';

export class Cocktail {
  id: string;
  name: string;
  imgSrc?: string;
  ingredients: Ingredient[];
}
