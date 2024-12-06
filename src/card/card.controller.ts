import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  saveCard(@Body() cocktailIds: string[]) {
    this.cardService.save(cocktailIds);
  }

  @Delete()
  clearCard() {
    this.cardService.clear();
  }
}
