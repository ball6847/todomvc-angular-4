import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Todo } from './todo';
import { todoReducer } from './todo.reducer';

export interface ApplicationState {
  todos: Todo[]
}

const appReducer = {
  todos: todoReducer
};

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer)
  ]
})
export class ApplicationStateModule { }
