import { Elysia } from "elysia";
import route from "./src/routes";

const app = new Elysia();
app.use(route);

app.listen(3000);
