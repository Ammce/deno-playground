import { Router } from "https://deno.land/x/oak/mod.ts";
import TodoController from "../controllers/todo-controller.ts";
const todoRouter = new Router();
const todoController = new TodoController();

// todoRouter.prefix("/api");

todoRouter.get("/", todoController.getAllTodos.bind(todoController));
todoRouter.post("/", todoController.createTodo.bind(todoController));

export default todoRouter;
