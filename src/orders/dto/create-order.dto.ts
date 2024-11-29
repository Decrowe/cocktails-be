import { OrderItemDto } from './order.dto';

export class CreateOrderDto {
  orderer: string;
  orderitems: OrderItemDto[];
}
