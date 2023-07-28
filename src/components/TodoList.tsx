import * as elements from "typed-html";

// Components
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

// Interfaces
import { Todo } from "../db/schema";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
      <TodoForm />
    </div>
  );
};

export default TodoList;
