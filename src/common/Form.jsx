import React, { useCallback, useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/todoContext";
import Button from "./Button";

function Form() {
  const [todoValue, setTodoValue] = useState("");
  const { todoList, setTodoList } = useContext(TodoContext);
  const uniqueId = Date.now();

  function handleTodo(e) {
    setTodoValue(e.target.value);
  }
  const createDate = useCallback((date) => {
    return date.toLocaleDateString("en-US");
  }, []);
  function addTodo(e) {
    e.preventDefault();

    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: uniqueId, todoName: todoValue, date: createDate(new Date()) },
    ]);

    setTodoValue("");
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <form onSubmit={addTodo} className="f-wrapper">
      <input
        type="text"
        value={todoValue}
        onChange={handleTodo}
        placeholder="something"
      />
      <Button name="Create" className="btn-create" type="submit" />
    </form>
  );
}
export default Form; /* Unique ID Generation: You are generating a new unique ID each time the component renders, which can cause issues when adding new todos. The ID should be unique across all todos, not just within a single render.

Updating localStorage on Todo Addition: The addToLocalStorage function updates localStorage for each todo individually but uses the todoList state which has not yet been updated. This can lead to issues with localStorage not reflecting the latest state.

State Management: You are updating localStorage with the old todoList state rather than the updated state. */
