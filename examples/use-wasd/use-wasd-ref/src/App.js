import useWASD from "use-wasd";
import { useRef } from "react";

const options = { allow: ["space"] };

export default function App() {
  const ref = useRef();
  const keyboard = useWASD({ ...options, ref });
  return (
    <>
      <h1>useWASD</h1>
      <h2>ref</h2>
      <hr />
      <label>
        <p>only tracks if input focused</p>
        <input type="text" ref={ref} />
        <br />
        space: {keyboard.space ? "true" : "false"}
      </label>
    </>
  );
}
