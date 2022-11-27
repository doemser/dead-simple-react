import useWASD from "use-wasd";

export default function App() {
  // Returns object with every key you press on the keyboard
  // and if they are currently pressed.
  const keyboard = useWASD();
  return (
    <>
      <h1>useWASD</h1>
      <h2>Basic example</h2>
      <hr />
      <p>press some keys on your keyboard</p>
      <pre>
        <code>{JSON.stringify(keyboard, null, 4)}</code>
      </pre>
    </>
  );
}
