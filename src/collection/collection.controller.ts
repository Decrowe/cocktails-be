import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionDto } from './dto/create-collection.dto';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Post()
  create(@Body() collectionDto: CollectionDto) {
    return this.collectionService.save(collectionDto);
  }

  @Delete()
  clear() {
    return this.collectionService.clear();
  }
}
