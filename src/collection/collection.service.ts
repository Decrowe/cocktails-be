import { Injectable } from '@nestjs/common';
import { CollectionDto } from './dto/create-collection.dto';

@Injectable()
export class CollectionService {
  save(collectionDto: CollectionDto) {
    return 'This action adds a new collection';
  }

  clear() {
    return `This action clears the current collection`;
  }
}
