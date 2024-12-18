import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo.jsx";
import { Todos } from "./components/Todos.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  // const res = await fetch("http://localhost:3000/todos");
  // const json = await res.json();
  // setTodos(json.todos);
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
