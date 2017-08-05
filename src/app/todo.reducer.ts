import { Todo } from './todo';
import {
  TodoAction,
  TODO_CREATED_ACTION,
  TODO_DELETED_ACTION,
  TODO_UPDATED_ACTION
} from './todo.action';

export function todoReducer(state: Todo[] = [], { type, payload }: TodoAction): Todo[] {
  switch (type) {
    case TODO_CREATED_ACTION:
      return [...state, <Todo>payload];

    case TODO_UPDATED_ACTION:
      return state.map(todo => todo.id == payload.id ? <Todo>payload : todo);

    case TODO_DELETED_ACTION:
      return state.filter(todo => todo.id != payload.id);

    default:
      return state;
  }
}
