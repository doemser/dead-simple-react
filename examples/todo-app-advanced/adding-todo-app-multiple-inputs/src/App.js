import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [todos, setTodos] = useState([
    { name: "buy brokkoli", color: "#de1717", id: "sdj2Ks" },
    { name: "eat brokkoli", color: "#6be109", id: "nZn6xK" }
  ]);

  return (
    <>
      <h1>Adding Todos</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData);

          setTodos([
            ...todos,
            { name: data.textInput, color: data.colorInput, id: nanoid(6) }
          ]);
        }}
      >
        <label>
          Todo:
          <input required type="text" name="textInput" />
        </label>
        <br />
        <label>
          Color:
          <input type="color" name="colorInput" />
        </label>
        <br />
        <button type="submit">add</button>
      </form>
      <hr />

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.name}</span>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  background: todo.color
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
