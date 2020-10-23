import { Todo } from './../entitis/todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private TodoRepository: Repository<Todo>,
    ) { }

    findAll(): Promise<Todo[]> {
        return this.TodoRepository.find();
    }

    findOne(id: string): Promise<Todo> {
        return this.TodoRepository.findOne(id);
    }

    create(todo: Todo): Promise<Todo> {
        delete todo.id;
        return this.TodoRepository.save(todo);
    }

    update(todo: Todo): Promise<Todo> {
        return this.TodoRepository.save(todo);
    }

    async remove(id: string): Promise<void> {
        await this.TodoRepository.delete(id);
    }
}