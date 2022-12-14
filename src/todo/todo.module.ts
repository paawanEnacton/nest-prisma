import { Module } from '@nestjs/common';
import { TodoController } from './controller/todo.controller';
import { PrismaService } from './../prisma.service';
import { TodoService } from './service/todo.service';

@Module({
  providers: [TodoService, PrismaService],
  controllers: [TodoController],
})
export class TodoModule {}
