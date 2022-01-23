import type { Todo } from "../types.ts";

interface ITodoRepository {
  getAllTodos: () => Todo[];
  createTodo: (todo: Todo) => Todo;
}

let fakeTodos: Todo[] = [];
fakeTodos = [{ id: "12321", title: "Open the dor" }];

export default class ToDoRepository implements ITodoRepository {
  getAllTodos() {
    return fakeTodos;
  }

  createTodo(todo: Todo) {
    return todo;
  }
}
