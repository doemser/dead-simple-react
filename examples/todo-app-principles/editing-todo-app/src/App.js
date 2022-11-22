import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { name: "buy brokkoli", id: "sdj2Ks", edit: false },
    { name: "eat brokkoli", id: "nZn6xK", edit: false }
  ]);

  return (
    <>
      <h1>Editing Todos</h1>

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
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
