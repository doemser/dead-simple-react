import { useState } from "react";

function Todo({ todo, onEditTodo }) {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  return (
    <li>
      {edit ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();

            const formData = new FormData(event.target);
            const { editInput } = Object.fromEntries(formData);

            onEditTodo(todo.id, editInput);
            setEdit(false);
          }}
        >
          <input
            type="text"
            name="editInput"
            value={editValue}
            onChange={(event) => {
              setEditValue(event.target.value);
            }}
          />
          <button type="submit">save</button>
        </form>
      ) : (
        <span>{todo.name}</span>
      )}

      <button
        type="button"
        onClick={() => {
          setEdit(!edit);
          setEditValue(todo.name);
        }}
      >
        {edit ? "cancel" : "edit"}
      </button>
    </li>
  );
}

export default function App() {
  const [todos, setTodos] = useState([
    { name: "buy brokkoli", id: "sdj2Ks" },
    { name: "eat brokkoli", id: "nZn6xK" },
  ]);

  function editTodo(id, newValue) {
    setTodos(
      todos.map((todo_) =>
        todo_.id === id ? { ...todo_, name: newValue } : todo_
      )
    );
  }

  return (
    <>
      <h1>Editing Todos</h1>

      <h3>Todos:</h3>
      <h2>keeping data clean</h2>

      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} onEditTodo={editTodo} />;
        })}
      </ul>
    </>
  );
}
