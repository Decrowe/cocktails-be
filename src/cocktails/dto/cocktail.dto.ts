import { ApiPropertyOptional } from '@nestjs/swagger';

export class CocktailDto {
  id: string;
  name: string;
  @ApiPropertyOptional()
  imgSrc: string;
}
