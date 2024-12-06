import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/shared/database/database.service';

@Injectable()
export class CardService {
  constructor(private readonly _databaseService: DatabaseService) {}

  save(cocktailIds: string[]) {
    this._databaseService.saveCard(cocktailIds);
  }

  clear() {
    this._databaseService.clearCard();
  }
}
