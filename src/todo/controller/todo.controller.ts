import { TodoService } from './../service/todo.service';
import {
  Controller,
  Get,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { CreateTodoDto } from '../dto/todo.dto';
import {} from '@nestjs/common/decorators';
import { Todo } from '../entity/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('getAllTodo')
  async getAllTodo(): Promise<Object> {
    return await this.todoService.getAllTodo();
  }
  @Get('getTodoById/:id')
  async getTodoById(@Param('id') id: number): Promise<Todo | null> {
    return await this.todoService.getTodoById(id);
  }

  @Post('createTodo')
  @UsePipes(new ValidationPipe())
  async createTodo(@Body() args: CreateTodoDto): Promise<Object> {
    return await this.todoService.createTodo(args);
  }
}
