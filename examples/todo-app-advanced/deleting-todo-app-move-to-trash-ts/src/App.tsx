import { useState } from "react";

interface Todo {
  name: string;
  id: string;
  markedAsTrash: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { name: "buy brokkoli", id: "sdj2Ks", markedAsTrash: false },
    { name: "eat brokkoli", id: "nZn6xK", markedAsTrash: false },
  ]);

  return (
    <>
      <h1>Deleting Todos</h1>
      <h2>move to trash</h2>

      <h3>Todos:</h3>
      <ul>
        {/* Filters to-dos that are not marked as trash before mapping*/}
        {todos
          .filter((todo_) => !todo_.markedAsTrash)
          .map((todo) => {
            return (
              <li key={todo.id}>
                {todo.name}
                <button
                  type="button"
                  onClick={() => {
                    setTodos(
                      todos.map((todo_) => {
                        return todo_.id === todo.id
                          ? { ...todo_, markedAsTrash: true }
                          : todo_;
                      })
                    );
                  }}
                >
                  move to trash
                </button>
              </li>
            );
          })}
      </ul>

      <h3>Trash:</h3>
      <ul>
        {/* Filters to-dos that are marked as trash before mapping*/}
        {todos
          .filter((todo_) => todo_.markedAsTrash)
          .map((todo_) => {
            return <li key={todo_.id}>{todo_.name}</li>;
          })}
      </ul>
    </>
  );
}
