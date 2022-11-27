import create from "zustand";
import { nanoid } from "nanoid";

// Global state management
const useStore = create((set) => ({
  // This key holds a state.
  todos: [{ name: "use zustand.js", complete: true, id: "kadJn" }],
  // This keys are holding function to update the state.
  addTodo: (name) => {
    set((state) => {
      return {
        todos: [...state.todos, { name, complete: false, id: nanoid() }],
      };
    });
  },
  deleteTodo: (id) => {
    set((state) => {
      return { todos: state.todos.filter((todo) => todo.id !== id) };
    });
  },
  completeTodo: (id) => {
    set((state) => {
      return {
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    });
  },
}));

export default function App() {
  // States and functions to update those,
  // can be directly imported into components
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const completeTodo = useStore((state) => state.completeTodo);

  return (
    <>
      <h1>zustand.js</h1>
      <h2>Todo-App</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const name = event.target.elements.inputField.value;

          addTodo(name);

          event.target.reset();
        }}
      >
        <input type="text" name="inputField" />
        <button type="submit">add</button>
      </form>

      <hr />

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => {
                  completeTodo(todo.id);
                }}
              />
              <span style={{ textDecoration: todo.complete && "line-through" }}>
                {todo.name}
              </span>
              <button
                type="button"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
