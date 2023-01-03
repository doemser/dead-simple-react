import { MutableRefObject } from "react";
import usePlayer from "../hooks/usePlayer";

interface PlayerProps {
  playerRef: MutableRefObject<HTMLDivElement>;
}

export default function Player({ playerRef }: PlayerProps) {
  const {
    position: { x, y }
  } = usePlayer();

  return (
    <div
      ref={playerRef}
      style={{
        position: "absolute",
        top: y + "%",
        left: x + "%",
        width: `20px`,
        height: `20px`,
        background: "black",
        borderRadius: "50%",
        transform: `translate3d(-10px, -10px, 0)`
      }}
    ></div>
  );
}
