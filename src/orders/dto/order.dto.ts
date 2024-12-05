import { OrderItemDto } from './order-item.dto';

export class OrderDTO {
  id: string;
  timestamp: Date;
  orderer: string;
  items: OrderItemDto[];
}
