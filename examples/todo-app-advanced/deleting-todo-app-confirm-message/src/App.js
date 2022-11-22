import { useState } from "react";

function Todo({ todo, onDelete }) {
  const [deleteMode, setDeleteMode] = useState(false);

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
  const [todos, setTodos] = useState([
    { name: "buy brokkoli", id: "sdj2Ks" },
    { name: "eat brokkoli", id: "nZn6xK" }
  ]);

  function deleteTodo(id) {
    setTodos(todos.filter((todo_) => todo_.id !== id));
  }

  return (
    <>
      <h1>Deleting Todos</h1>

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />;
        })}
      </ul>
    </>
  );
}
