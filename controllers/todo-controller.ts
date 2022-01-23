import { Todo } from "../types.ts";

let fakeTodos: Todo[] = [];
fakeTodos = [{ id: "12321", title: "Open the dor" }];

export default class ToDoController {
  getAllTodos() {
    return fakeTodos;
  }
}
