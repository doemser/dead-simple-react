import { useEffect, useState } from "react";

function useMousePosition() {
  const [position, setPosition] = useState<Record<string, number>>({
    x: 0,
    y: 0
  });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const { pageX, pageY } = event;
      setPosition({ x: pageX, y: pageY });
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // This function is called when unmounting the component
    // and is executed the first time before the second rendering.
    // This ensures that we only have one EventListener running at a time.
    return () => {
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
