import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import {
  CompleteOrderState,
  CompleteOrderStates,
} from './complete-order-state.dto';

@ApiExtraModels(CompleteOrderDTO)
export class CompleteOrderDTO {
  @ApiProperty({ name: 'id' })
  id: string;

  @ApiProperty({
    name: 'completeOrderState',
    enum: Object.values(CompleteOrderStates),
  })
  state: CompleteOrderState;

  @ApiProperty({ name: 'messages' })
  messages: string[];
}
