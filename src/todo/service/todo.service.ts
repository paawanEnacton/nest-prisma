import { PrismaService } from './../../prisma.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { CreateTodoDto } from '../dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getAllTodo(): Promise<Todo[]> {
    const getData = this.prisma.todo.findMany({});
    console.log('getData :>> ', getData);
    return;
  }
  async getTodoById(id: number): Promise<Todo | null> {
    return await this.prisma.todo.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async createTodo(data: CreateTodoDto): Promise<Object> {
    try {
      const createData = await this.prisma.todo.create({
        data,
      });
      console.log('createData :>> ', createData);
      return {
        statusCode: HttpStatus.CREATED,
        status: true,
        message: 'OK',
        data: createData,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        status: false,
        message: error.message,
        data: null,
      };
    }
  }

  async updateTodo(id: number): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id: Number(id) },
      data: { completed: true },
    });
  }
  async deleteTodo(id: number): Promise<Todo> {
    return this.prisma.todo.delete({
      where: { id: Number(id) },
    });
  }
}
