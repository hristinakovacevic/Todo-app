import React from "react";
import Form from "./common/Form";
import TodoList from "./common/TodoList";
import { ContextProvider } from "./context/todoContext";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <div className="wrapper">
        <h1>To do app</h1>
        <Form />
        <TodoList />
      </div>
    </ContextProvider>
  );
}

export default App;
