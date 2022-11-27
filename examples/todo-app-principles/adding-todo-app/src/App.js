import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { name: "buy brokkoli", id: "sdj2Ks" },
    { name: "eat brokkoli", id: "nZn6xK" },
  ]);

  return (
    <>
      <h1>Adding Todos</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([...todos, { name: inputValue, id: nanoid(6) }]);
          // Clears input after form submit.
          setInputValue("");
        }}
      >
        <label>
          Todo:
          <input
            required
            // This is called a controlled input.
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </label>
        <button type="submit">add</button>
      </form>
      <hr />

      <h3>Todos:</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.name}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
