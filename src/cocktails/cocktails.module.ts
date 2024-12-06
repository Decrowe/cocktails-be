import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/shared/database/database.module';
import { CocktailsController } from './cocktails.controller';
import { CocktailsService } from './cocktails.service';

@Module({
  controllers: [CocktailsController],
  imports: [DatabaseModule],
  providers: [CocktailsService],
})
export class CocktailsModule {}
