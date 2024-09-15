import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import Todo from "./Todo";

function TodoList() {
  const { todoList } = useContext(TodoContext);

  return (
    <div>
      {todoList.length === 0 && <p>No todos</p>}
      {todoList.map((todo) => {
        return <Todo todo={todo} key={todo.key} />;
      })}
    </div>
  );
}
export default TodoList;
