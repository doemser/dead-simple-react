import { useState } from "react";
import { nanoid } from "nanoid";

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );

  return (
    <>
      <h1>Saving Todos</h1>
      <h2>using localstorage</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodos = [...todos, nanoid(5)];
          setTodos(newTodos);
          setItem("todos", newTodos);
        }}
      >
        <button type="submit">add a random id as todo</button>
        <button
          type="button"
          onClick={() => {
            setTodos([]);
            setItem("todos", []);
          }}
        >
          clear todos
        </button>
      </form>

      <hr />

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </>
  );
}
