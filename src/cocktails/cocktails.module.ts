import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CocktailsController } from './cocktails.controller';
import { CocktailsService } from './cocktails.service';

@Module({
  controllers: [CocktailsController],
  imports: [HttpModule],
  providers: [CocktailsService],
})
export class CocktailsModule {}
