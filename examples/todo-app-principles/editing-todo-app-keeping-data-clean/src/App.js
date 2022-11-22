import { useState } from "react";

function Todo({ todo, onControlTodo, onEditTodo }) {
  return (
    <li key={todo.id}>
      {todo.edit ? (
        <input
          type="text"
          value={todo.name}
          onChange={(event) => {
            onControlTodo(event, todo);
          }}
        />
      ) : (
        <span>{todo.name}</span>
      )}

      <button
        type="button"
        onClick={() => {
          onEditTodo(todo);
        }}
      >
        {todo.edit ? "save" : "edit"}
      </button>
    </li>
  );
}

export default function App() {
  const [todos, setTodos] = useState([
    { name: "buy brokkoli", id: "sdj2Ks", edit: false },
    { name: "eat brokkoli", id: "nZn6xK", edit: false }
  ]);

  function controlTodo(event, todo) {
    setTodos(
      todos.map((todo_) =>
        todo_.id === todo.id ? { ...todo_, name: event.target.value } : todo_
      )
    );
  }

  function editTodo(todo) {
    setTodos(
      todos.map((todo_) =>
        todo_.id === todo.id ? { ...todo_, edit: !todo_.edit } : todo_
      )
    );
  }

  return (
    <>
      <h1>Editing Todos</h1>

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              onControlTodo={controlTodo}
              onEditTodo={editTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
