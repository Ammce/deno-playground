import { Context } from "https://deno.land/x/oak/mod.ts";
import ToDoService from "../services/todo_service.ts";
import type { Todo } from "../types.ts";

interface IToDoController {
  getAllTodos: (ctx: Context) => void;
  createTodo: (ctx: Context) => void;
}

export default class ToDoController implements IToDoController {
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
