import { TodoController } from './../controllers/todo.controller';
import { Todo } from './../entitis/todo.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from '../services/todo.service';

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    controllers: [TodoController],
    providers: [TodoService],
})
export class TodoModule { }
