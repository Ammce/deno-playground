import { Context } from "https://deno.land/x/oak/mod.ts";
import { Todo } from "../types.ts";
import ToDoService from "../services/todo_service.ts";

export default class ToDoController {
  #todoService: ToDoService;

  constructor(todoService: ToDoService) {
    this.#todoService = todoService;
  }

  getAllTodos(ctx: Context) {
    ctx.response.body = this.#todoService.getAllTodos();
  }

  async createTodo(ctx: Context) {
    const todo: Todo = await ctx.request.body().value;
    ctx.response.body = this.#todoService.createTodo(todo);
  }
}
