import type { Todo } from "../types.ts";

let fakeTodos: Todo[] = [];
fakeTodos = [{ id: "12321", title: "Open the dor" }];

export default class ToDoService {
  getAllTodos() {
    return fakeTodos;
  }

  async createTodo(todo: Todo) {
    fakeTodos = [...fakeTodos, todo];
    return fakeTodos;
  }
}
