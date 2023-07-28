import * as elements from "typed-html";
import { Todo } from "../db/schema";

const TodoItem = ({ id, content, completed }: Todo) => {
  return (
    <div class="flex flex-row space-x-3">
      <p>{content}</p>
      <input
        type="checkbox"
        checked={completed}
        hx-post={`/todos/toggle/${id}`}
        hx-swap="outerHTML"
        hx-target="closest div"
      />
      <button class="text-red-500" hx-delete={`/todos/${id}`} hx-swap="outerHTML" hx-target="closest div">
        x
      </button>
    </div>
  );
};

export default TodoItem;
