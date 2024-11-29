import { ApiPropertyOptional } from '@nestjs/swagger';
import { Ingredient } from '../entities/ingredient.entity';

export class CocktailDto {
  id: string;
  name: string;
  @ApiPropertyOptional()
  imgSrc: string;
  ingredients: Ingredient[];
}
