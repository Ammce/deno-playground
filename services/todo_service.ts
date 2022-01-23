import type { Todo } from "../types.ts";

let fakeTodos: Todo[] = [];
fakeTodos = [{ id: "12321", title: "Open the dor" }];

interface IToDoService {
  getAllTodos: () => Todo[];
  createTodo: (todo: Todo) => Todo;
}

export default class ToDoService implements IToDoService {
  getAllTodos() {
    return fakeTodos;
  }

  createTodo(todo: Todo) {
    return todo;
  }
}
