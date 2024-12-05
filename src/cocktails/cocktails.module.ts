import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/shared/database/database.service';
import { CocktailsController } from './cocktails.controller';
import { CocktailsService } from './cocktails.service';

@Module({
  controllers: [CocktailsController],
  imports: [HttpModule],
  providers: [CocktailsService, DatabaseService],
})
export class CocktailsModule {}
