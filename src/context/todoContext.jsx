import React, { createContext, useState } from "react";
export const TodoContext = createContext();

export function ContextProvider({ children }) {
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("list");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  function deleteTodo(id) {
    setTodoList((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <TodoContext.Provider value={{ todoList, setTodoList, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
