import { Context } from "https://deno.land/x/oak/mod.ts";
import { Todo } from "../types.ts";

let fakeTodos: Todo[] = [];
fakeTodos = [{ id: "12321", title: "Open the dor" }];

export default class ToDoController {
  getAllTodos(ctx: Context) {
    ctx.response.body = fakeTodos;
  }

  async createTodo(ctx: Context) {
    const todo: Todo = await ctx.request.body().value;
    fakeTodos = [...fakeTodos, todo];
    ctx.response.body = fakeTodos;
  }
}
