import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import { useMediaQuery } from "react-responsive";
import deleteIcon from "../assets/delete-icon.svg";
import editIcon from "../assets/edit.svg";
import menu from "../assets/three-dots.svg";

import Button from "./Button";

function Todo({ todo, key }) {
  const { deleteTodo, setTodoList, todoList } = useContext(TodoContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [newTodoState, setNewTodoState] = useState(() => {
    if (todo.todoName) {
      return todo.todoName;
    }
  });

  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  function handleNewTodo(e) {
    setNewTodoState(e.target.value);
  }
  function editTodoHandler() {
    setIsEditable(!isEditable);
  }
  //stavi savetodo u callback da se ne bi svaki put kreirala nova arrow function na svaki render
  function saveTodo(value, id) {
    setIsEditable(false);
    setIsOpenMenu(false);
    return setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { todoName: value, id: id } : todo
      )
    );
  }

  return (
    <>
      <div className="todo-wrap" key={key}>
        <p className="date-p">
          <i>Created on : {todo.date}</i>
        </p>
        <div className="todo-wrap__todo-btns">
          {isEditable ? (
            <input
              type="text"
              value={newTodoState}
              onChange={handleNewTodo}
              placeholder="something"
              className="edit-todo"
            />
          ) : (
            <p>{todo.todoName || newTodoState}</p>
          )}
          {isMobile ? (
            <img
              src={menu}
              alt="menu"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
          ) : (
            <div className="btn-container">
              <Button
                icon={deleteIcon}
                name="Delete"
                onClick={() => deleteTodo(todo.id)}
                className="btn-delete"
              />

              {isEditable ? (
                <Button
                  className="btn-save"
                  name="Save"
                  onClick={() => saveTodo(newTodoState, todo.id)}
                />
              ) : (
                <Button
                  name="Edit"
                  icon={editIcon}
                  onClick={editTodoHandler}
                  className="btn-edit"
                />
              )}
            </div>
          )}
        </div>
      </div>

      {isOpenMenu && (
        <div className="btn-container">
          <Button
            icon={deleteIcon}
            name="Delete"
            onClick={() => deleteTodo(todo.id)}
            className="btn-delete"
          />

          {isEditable ? (
            <Button
              className="btn-save"
              name="Save"
              onClick={() => saveTodo(newTodoState, todo.id)}
            />
          ) : (
            <Button
              name="Edit"
              icon={editIcon}
              onClick={editTodoHandler}
              className="btn-edit"
            />
          )}
        </div>
      )}
    </>
  );
}
export default Todo;
