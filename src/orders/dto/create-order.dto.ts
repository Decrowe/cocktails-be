import { CreateOrderItemDto } from './create-order-item.dto';

export class CreateOrderDto {
  orderer: string;
  items: CreateOrderItemDto[];
}
