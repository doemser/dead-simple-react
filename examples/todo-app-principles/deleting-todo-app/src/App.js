import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
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
