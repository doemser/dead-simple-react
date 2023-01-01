import { useState } from "react";

interface todos {
  name: string;
  id: string;
}

interface TodoProps {
  todo: todos;
  onDelete: (id: string) => void;
}

function Todo({ todo, onDelete }: TodoProps) {
  // Nested useState to handle state that is only needed for rendering.
  // Keeps your todo data clean.
  const [deleteMode, setDeleteMode] = useState<boolean>(false);

  return (
    <li>
      <span>{todo.name}</span>

      {deleteMode ? (
        <>
          <p>really delete?</p>
          <button
            type="button"
            onClick={() => {
              setDeleteMode(false);
            }}
          >
            cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onDelete(todo.id);
              setDeleteMode(false);
            }}
          >
            yes, delete
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => {
            setDeleteMode(true);
          }}
        >
          delete
        </button>
      )}
    </li>
  );
}

export default function App() {
  const [todos, setTodos] = useState<todos[]>([
    { name: "buy brokkoli", id: "sdj2Ks" },
    { name: "eat brokkoli", id: "nZn6xK" }
  ]);

  // Lifting up state.
  // Wrap set function in handler function.
  // Pass handler function to component, which executes it.
  // Keep logic close to useState
  function deleteTodo(id: string) {
    setTodos(todos.filter((todo_) => todo_.id !== id));
  }

  return (
    <>
      <h1>Deleting Todos</h1>
      <h2>confirm message</h2>

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />;
        })}
      </ul>
    </>
  );
}
