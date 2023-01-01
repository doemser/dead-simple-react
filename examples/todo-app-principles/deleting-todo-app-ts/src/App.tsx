import { useState } from "react";

interface todos {
  name: string;
  id: string;
}

export default function App() {
  const [todos, setTodos] = useState<todos[]>([
    { name: "buy brokkoli", id: "sdj2Ks" },
    { name: "eat brokkoli", id: "nZn6xK" }
  ]);

  return (
    <>
      <h1>Deleting Todos</h1>

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.name}</span>
              <button
                type="button"
                onClick={() => {
                  // The filter method returns any id that does not match the current one and deletes it like this
                  setTodos(todos.filter((todo_) => todo_.id !== todo.id));
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
