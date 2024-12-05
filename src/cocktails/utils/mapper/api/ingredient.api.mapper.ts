import { IngredientDTO } from 'src/cocktails/dto/ingredient.dto';

export function ingredientApiMapper(dto: any): IngredientDTO[] {
  const ingredients: IngredientDTO[] = [];

  const measurePrefix = 'strMeasure';
  const ingredientPrefix = 'strIngredient';
  const ingredientKeys = Object.keys(dto).filter((key) =>
    key.includes(ingredientPrefix),
  );

  ingredientKeys.forEach((ingredientKey) => {
    if (dto[ingredientKey] !== null) {
      const ingredient = dto[ingredientKey];

      const suffix = ingredientKey.slice(ingredientKey.length - 1);
      const measureKey = measurePrefix + suffix;

      const measure = dto[measureKey];

      ingredients.push({ name: ingredient, quantity: measure });
    }
  });
  return ingredients;
}
