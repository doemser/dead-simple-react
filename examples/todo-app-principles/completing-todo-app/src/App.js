import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { name: "buy brokkoli", completed: true, id: "sdj2Ks" },
    { name: "eat brokkoli", completed: false, id: "nZn6xK" }
  ]);

  return (
    <>
      <h1>Completing Todos</h1>

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  setTodos(
                    todos.map((todo_) =>
                      todo_.id === todo.id
                        ? { ...todo_, completed: !todo_.completed }
                        : todo_
                    )
                  );
                }}
              />
              <span
                style={{ textDecoration: todo.completed && "line-through" }}
              >
                {todo.name}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
