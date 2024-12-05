import { CompleteOrderState } from './complete-order-state.dto';

export class CompleteOrderDto {
  id: string;
  state: CompleteOrderState;
  messages: string[];
}
