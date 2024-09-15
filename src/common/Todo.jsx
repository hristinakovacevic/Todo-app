import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import deleteIcon from "../assets/delete-icon.svg";
import editIcon from "../assets/edit.svg";
import Button from "./Button";

function Todo({ todo, key }) {
  const { deleteTodo, setTodoList, todoList } = useContext(TodoContext);
  const [newTodoState, setNewTodoState] = useState(() => {
    if (todo.todoName) {
      return todo.todoName;
    }
  });
  const [isEditable, setIsEditable] = useState(false);

  function handleNewTodo(e) {
    setNewTodoState(e.target.value);
  }
  function editTodoHandler() {
    setIsEditable(true);
  }
  function saveTodo(value, id) {
    setIsEditable(false);
    return setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { todoName: value, id: id } : todo
      )
    );
  }

  return (
    <div className="todo-wrap" key={key}>
      {isEditable ? (
        <input
          type="text"
          value={newTodoState}
          onChange={handleNewTodo}
          placeholder="something"
        />
      ) : (
        <p>{todo.todoName || newTodoState}</p>
      )}

      <span>
        <img
          src={deleteIcon}
          alt="delete icon"
          onClick={() => deleteTodo(todo.id)}
        />
        Delete
      </span>
      {isEditable ? (
        <button onClick={() => saveTodo(newTodoState, todo.id)}>Save</button>
      ) : (
        <span>
          <img src={editIcon} alt="edit icon" onClick={editTodoHandler} />
          <p>Edit</p>
        </span>
      )}
    </div>
  );
}
export default Todo;
