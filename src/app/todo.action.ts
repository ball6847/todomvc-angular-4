import { Action } from '@ngrx/store';
import { Todo } from './todo';

export const TODO_CREATED_ACTION = "TODO_CREATED_ACTION";
export const TODO_UPDATED_ACTION = "TODO_UPDATED_ACTION";
export const TODO_DELETED_ACTION = "TODO_DELETED_ACTION";

export class TodoAction implements Action {
  type: string;
  constructor(public payload: Todo) { }
}

export class TodoCreatedAction extends TodoAction {
  type = TODO_CREATED_ACTION;
}

export class TodoUpdatedAction extends TodoAction {
  type = TODO_UPDATED_ACTION;
}

export class TodoDeletedAction extends TodoAction {
  type = TODO_DELETED_ACTION;
}
