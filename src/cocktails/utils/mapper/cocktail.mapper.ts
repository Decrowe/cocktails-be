import { CocktailDto } from 'src/cocktails/dto/cocktail.dto';
import { Cocktail } from 'src/cocktails/entities/cocktail.entity';
import { Mapper } from './mapper.base';

export const CocktailMapper: Mapper<CocktailDto, Cocktail> = {
  from(dto: CocktailDto) {
    const { id, imgSrc, ingredients, name } = dto;
    return { id, ingredients, name, imgSrc };
  },

  to(model: Cocktail) {
    const { id, imgSrc, ingredients, name } = model;
    return { id, ingredients, name, imgSrc };
  },
};
