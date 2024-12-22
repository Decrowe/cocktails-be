import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CompleteOrderDto } from './dto/complete-order.dto';
import { Messages } from './dto/message.dto';
import { QueueService } from './queue.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class QueueGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  constructor(private readonly queueService: QueueService) {}

  afterInit(server: Server) {
    this.server = server;
    this.listenOnQueue();
  }

  listenOnQueue() {
    this.queueService.orders$.subscribe({
      next: (orders) => {
        this.server.emit(Messages.queueUpdated, orders);
      },
    });
  }

  @SubscribeMessage(Messages.completeOrder)
  update(@MessageBody() completeOrder: CompleteOrderDto) {
    return this.queueService.complete(completeOrder);
  }
  @SubscribeMessage(Messages.getCurrent)
  getCurrent() {
    const current = this.queueService.getCurrent();
    this.server.emit(Messages.getCurrent, current);
  }
}
