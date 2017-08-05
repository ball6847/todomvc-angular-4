import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ApplicationState } from './app.state'
import { Todo } from './todo';
import {
  TodoCreatedAction,
  TodoDeletedAction,
  TodoUpdatedAction
} from './todo.action';


@Injectable()
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos$: Observable<Todo[]>;

  constructor(protected store: Store<ApplicationState>) {
    this.todos$ = this.store.select('todos');
  }

  // Simulate POST /todos
  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }

    this.store.dispatch(
      new TodoCreatedAction(todo)
    );
  }

  // Simulate DELETE /todos/:id
  deleteTodo(todo: Todo) {
    this.store.dispatch(
      new TodoDeletedAction(todo)
    );
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.todos$;
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    const update = Object.assign({}, todo, { complete: !todo.complete });

    this.store.dispatch(
      new TodoUpdatedAction(update)
    )
  }
}
