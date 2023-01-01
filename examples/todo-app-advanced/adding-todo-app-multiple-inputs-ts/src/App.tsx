import { useState } from "react";
import { nanoid } from "nanoid";

interface Todo {
  name: string;
  color: string;
  category: string;
  id: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { name: "buy brokkoli", color: "#de1717", category: "fun", id: "sdj2Ks" },
    { name: "eat brokkoli", color: "#6be109", category: "cool", id: "nZn6xK" },
  ]);

  return (
    <>
      <h1>Adding Todos</h1>
      <h2>multiple inputs</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          // Creates a FormData object.
          const formData: FormData = new FormData(
            event.target as HTMLFormElement
          );
          // Transforms a list of key-value pairs into an object
          const data = Object.fromEntries(formData as any);

          setTodos([
            ...todos,
            {
              name: data.textInput,
              color: data.colorInput,
              category: data.categorySelection,
              id: nanoid(6),
            },
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
        <label>
          Category:
          <select name="categorySelection">
            <option>cool</option>
            <option>fun</option>
            <option>work</option>
          </select>
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
              <br />
              <span>category: {todo.category}</span>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  background: todo.color,
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
