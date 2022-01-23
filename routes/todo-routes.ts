import { Router } from "https://deno.land/x/oak/mod.ts";
import ToDoController from "../controllers/todo-controller.ts";
import ToDoService from "../services/todo_service.ts";
import ToDoRepository from "../repositories/todo_repository.ts";

const todoRepository = new ToDoRepository();
const todoService = new ToDoService(todoRepository);
const todoController = new ToDoController(todoService);
const todoRouter = new Router();

// todoRouter.prefix("/api");

todoRouter.get("/", todoController.getAllTodos.bind(todoController));
todoRouter.post("/", todoController.createTodo.bind(todoController));

export default todoRouter;
