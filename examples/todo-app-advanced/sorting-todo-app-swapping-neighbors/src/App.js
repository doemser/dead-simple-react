import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { name: "love", id: 1 },
    { name: "death", id: 2 },
    { name: "robots", id: 3 }
  ]);

  function moveTodo(oldIndex, newIndex) {
    const clone = [...todos];
    const cachedValue = clone[oldIndex];
    clone[oldIndex] = clone[newIndex];
    clone[newIndex] = cachedValue;

    setTodos(clone);
  }

  return (
    <>
      <h1>Sorting Todos</h1>
      <h2>Swapping neighbors</h2>

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id}>
              {todo.name}
              <button
                type="button"
                onClick={() => {
                  if (index > 0) {
                    moveTodo(index, index - 1);
                  }
                }}
              >
                move up
              </button>
              <button
                type="button"
                onClick={() => {
                  if (index < todos.length - 1) {
                    moveTodo(index, index + 1);
                  }
                }}
              >
                move down
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
