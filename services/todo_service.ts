import TodoRepository from "../repositories/todo_repository.ts";

import type { Todo } from "../types.ts";

interface IToDoService {
  getAllTodos: () => Todo[];
  createTodo: (todo: Todo) => Todo;
}

export default class ToDoService implements IToDoService {
  #todoRepitory: TodoRepository;
  constructor(todoRepository: TodoRepository) {
    this.#todoRepitory = todoRepository;
  }

  getAllTodos() {
    return this.#todoRepitory.getAllTodos();
  }

  createTodo(todo: Todo) {
    return this.#todoRepitory.createTodo(todo);
  }
}
