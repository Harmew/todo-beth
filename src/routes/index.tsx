import { Elysia } from "elysia";

// Routes
import TodoRouter from "./TodoRouter";

const route = (app: Elysia) => app.use(TodoRouter);

export default route;
