import { OrderItemDto } from './order-item.dto';

export class OrderDto {
  id: string;
  timestamp: Date;
  orderer: string;
  items: OrderItemDto[];
}
