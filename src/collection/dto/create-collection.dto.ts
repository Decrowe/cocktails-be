import { ApiProperty } from '@nestjs/swagger';

export class CollectionDto {
  @ApiProperty({ description: 'Overrides current collection of Cocktail ids' })
  cocktailIds: string[];
}
