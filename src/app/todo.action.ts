import { Action } from '@ngrx/store';
import { Todo } from './todo';

export const TODO_CREATED_ACTION = "TODO_CREATED_ACTION";
export const TODO_UPDATED_ACTION = "TODO_UPDATED_ACTION";
export const TODO_DELETED_ACTION = "TODO_DELETED_ACTION";

class TodoActionBase implements Action {
  type: string;
  constructor(public payload: Todo) { }
}

class TodoActionItemsBase implements Action {
  type: string;
  constructor(public payload: Todo[]) { }
}

export class TodoCreatedAction extends TodoActionBase {
  type = TODO_CREATED_ACTION;
}

export class TodoUpdatedAction extends TodoActionBase {
  type = TODO_UPDATED_ACTION;
}

export class TodoDeletedAction extends TodoActionBase {
  type = TODO_DELETED_ACTION;
}

export type TodoAction = TodoActionBase & TodoActionItemsBase;
