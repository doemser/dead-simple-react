import { useEffect, useState } from "react";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // update x and y position
    const handleMouseMove = (event) => {
      const { pageX, pageY } = event;
      setPosition({ x: pageX, y: pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    // When Effect unmounted
    return () => {
      // First time executed before useEffect runs second time
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
}

export default function App() {
  const { x, y } = useMousePosition();

  return (
    <>
      <h1>Mouseposition hook</h1>
      x: {x}
      <br />
      y: {y}
      <div
        style={{
          position: "absolute",
          top: y,
          left: x
        }}
      >
        Mouse-Follower.
      </div>
    </>
  );
}
