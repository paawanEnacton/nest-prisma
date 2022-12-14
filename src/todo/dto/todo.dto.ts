import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  title: string;

  description: string;

  @IsNotEmpty()
  completed: boolean;

  @IsNotEmpty()
  user: string;
}
