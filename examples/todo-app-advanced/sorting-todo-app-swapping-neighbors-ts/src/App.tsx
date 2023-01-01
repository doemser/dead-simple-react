import { useState } from "react";

interface todos {
  name: string;
  id: number;
}

export default function App() {
  const [todos, setTodos] = useState<todos[]>([
    { name: "love", id: 1 },
    { name: "death", id: 2 },
    { name: "robots", id: 3 }
  ]);

  // Swaps the values of two indexes in an array.
  function moveTodo(oldIndex: number, newIndex: number) {
    // Was cloned because states in a useState are
    // considered immutable regardless of the datatype
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
