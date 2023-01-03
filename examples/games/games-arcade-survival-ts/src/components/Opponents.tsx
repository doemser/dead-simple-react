import Player from "./Player";
import Enemy from "./Enemy";
import { useRef } from "react";
import useCollision from "../hooks/useCollision";

export default function Opponents() {
  const player = useRef(document.createElement("div"));
  const enemy = useRef(document.createElement("div"));
  useCollision(player, enemy);

  return (
    <>
      <Player playerRef={player} />
      <Enemy enemyRef={enemy} />
    </>
  );
}
