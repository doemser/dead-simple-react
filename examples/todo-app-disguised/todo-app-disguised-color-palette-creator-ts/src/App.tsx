import { useState } from "react";
import { nanoid } from "nanoid";

interface Todo {
  hex: string;
  id: string;
}

export default function App() {
  // text and color input are both controlled by this state
  const [colorValue, setColorValue] = useState<string>("#1cce93");
  const [todos, setTodos] = useState<Todo[]>([
    { hex: "#1c90ce", id: "sdj2Ks" },
    { hex: "#ce1c37", id: "nZn6xK" }
  ]);

  return (
    <>
      <h1>Color Palette Creator</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([...todos, { hex: colorValue, id: nanoid(6) }]);
        }}
      >
        <label>
          Enter #hex:
          <input
            required
            value={colorValue}
            onChange={(event) => {
              setColorValue(event.target.value);
            }}
          />
        </label>
        <br />
        or
        <br />
        <label>
          Choose Color:
          <input
            type="color"
            value={colorValue}
            onChange={(event) => {
              setColorValue(event.target.value);
            }}
          />
        </label>
        <br />
        <button type="submit">add</button>
      </form>
      <hr />

      {todos.map((todo) => {
        return (
          <div key={todo.id} style={{ background: todo.hex }}>
            <button
              type="button"
              style={{ margin: "20px" }}
              onClick={() => {
                // navigator.clipboard.writeText() is an async function we have to wait for
                navigator.clipboard.writeText(todo.hex).then(
                  () => {
                    alert(`copied ${todo.hex} to the clipboard`);
                  },
                  (error) => {
                    console.error(error);
                    alert(
                      `ERROR - Open the app in a new window under https://zpgmu4.csb.app/ or try another browser :)`
                    );
                  }
                );
              }}
            >
              copy hex-code
            </button>
          </div>
        );
      })}
    </>
  );
}
