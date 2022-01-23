import { Router } from "https://deno.land/x/oak/mod.ts";
import ToDoController from "../controllers/todo-controller.ts";
import ToDoService from "../services/todo_service.ts";
const todoRouter = new Router();
const todoService = new ToDoService();
const todoController = new ToDoController(todoService);

// todoRouter.prefix("/api");

todoRouter.get("/", todoController.getAllTodos.bind(todoController));
todoRouter.post("/", todoController.createTodo.bind(todoController));

export default todoRouter;
