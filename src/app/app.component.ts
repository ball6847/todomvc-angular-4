import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  newTodo: Todo = new Todo();
  todos$: Observable<Todo[]>;

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit() {
    this.todos$ = this.todoDataService.getAllTodos();
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodo(todo);
  }
}
