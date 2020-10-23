import { TodoService } from './../services/todo.service';
import { Todo } from './../entitis/todo.entity';
import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CreateDto, UpdateDto } from './dto';

@Controller('todo')
export class TodoController {

  constructor(private readonly todoService: TodoService) { }

  @Get()
  getAllAction(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async getOneAction(@Param('id') id: string): Promise<Todo> {
    const todo = this.todoService.findOne(id);
    if (todo == undefined) {
      throw new HttpException(
        `Todo with id ${id} not exists`,
        HttpStatus.NOT_FOUND
      );
    }
    return todo;
  }

  @Post()
  createAction(@Body() createDdo: CreateDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createDdo.title;
    if (createDdo.isComplited !== undefined) {
      todo.isComplited = createDdo.isComplited;
    }
    return this.todoService.create(todo);
  }

  @Put(':id')
  async updateAction(
    @Param('id') id: string,
    @Body() { title, isComplited = false }: UpdateDto
  ): Promise<Todo> {
    const todo = await this.todoService.findOne(id);
    if (todo == undefined) {
      throw new NotFoundException(`Todo with id ${id} not exists`)
    }
    todo.title = title;
    todo.isComplited = isComplited;
    return this.todoService.update(todo);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void> {
    return this.todoService.remove(id);
  }
}
