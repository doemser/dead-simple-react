import { useState } from "react";
import { nanoid } from "nanoid";

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function App() {
  // If there is data for the key in localStorage,
  // initialize the useState with it,
  // otherwise initialize with an empty array.
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
          // Saving key and value to localStorage
          setItem("todos", newTodos);
        }}
      >
        <button type="submit">add a random id as todo</button>
        <button
          type="button"
          onClick={() => {
            setTodos([]);
            // Resetting localStorage to an empty array
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
