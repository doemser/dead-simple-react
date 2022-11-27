import useWASD from "use-wasd";

export default function App() {
  // Returns an object containing the keys you pressed
  // and whether you are currently pressing them.
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
