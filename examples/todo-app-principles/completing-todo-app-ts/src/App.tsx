import { useState } from "react";

interface todos {
  name: string;
  completed: boolean;
  id: string;
}

export default function App() {
  const [todos, setTodos] = useState<todos[]>([
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
                // Controlled input of type checkbox - uses "checked" instead of "value".
                checked={todo.completed}
                onChange={() => {
                  setTodos(
                    // Map over each todo and toggle completed if id matches.
                    todos.map((todo_) =>
                      todo_.id === todo.id
                        ? { ...todo_, completed: !todo_.completed }
                        : todo_
                    )
                  );
                }}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
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
