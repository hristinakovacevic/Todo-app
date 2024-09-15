import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/todoContext";

function getStorageValue(key) {
  let getFromStorage = localStorage.getItem(key);
  alert(getFromStorage);
}
export const useLocalStorage = (key) => {
  const { todoList } = useContext(TodoContext);
  return getStorageValue(key);
};
useEffect(() => {
  if (localStorage.getItem === 0) {
    localStorage.setItem("list", JSON.stringify(todoList));
  }
}, [todoList]);
