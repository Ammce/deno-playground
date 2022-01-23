import { Application, Context } from "https://deno.land/x/oak/mod.ts";
import todoRoutes from "./routes/todo-routes.ts";
const app = new Application();

app.use(todoRoutes.allowedMethods());
app.use(todoRoutes.routes());

await app.listen({ port: 8000 });
