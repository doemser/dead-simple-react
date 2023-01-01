import { useState } from "react";

interface Todo {
  name: string;
  id: string;
  edit: boolean;
}

export default function App() {
  // The edit key is only needed in the frontend
  // and would have no added value in a database.
  // There is a better way keeping your data clean,
  // we show it in the advanced examples.
  const [todos, setTodos] = useState<Todo[]>([
    { name: "buy brokkoli", id: "sdj2Ks", edit: false },
    { name: "eat brokkoli", id: "nZn6xK", edit: false },
  ]);

  return (
    <>
      <h1>Editing Todos</h1>

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {/* This conditionally renders either a controlled input or a span
              that contains just the todo name. */}
              {todo.edit ? (
                <input
                  type="text"
                  value={todo.name}
                  onChange={(event) => {
                    setTodos(
                      todos.map((todo_) =>
                        todo_.id === todo.id
                          ? { ...todo_, name: event.target.value }
                          : todo_
                      )
                    );
                  }}
                />
              ) : (
                <span>{todo.name}</span>
              )}
              <button
                type="button"
                onClick={() => {
                  setTodos(
                    // If id's match, edit state will bei toggled.
                    todos.map((todo_) =>
                      todo_.id === todo.id
                        ? { ...todo_, edit: !todo_.edit }
                        : todo_
                    )
                  );
                }}
              >
                {todo.edit ? "save" : "edit"}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
