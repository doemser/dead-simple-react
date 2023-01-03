import { useEffect, MutableRefObject } from "react";
import useStore from "../hooks/useStore";

interface EnemyProps {
  enemyRef: MutableRefObject<HTMLDivElement>;
}

let intervalID: NodeJS.Timeout;

export default function Enemy({ enemyRef }: EnemyProps) {
  const gameState = useStore((state) => state.gameState);
  const enemy = useStore((state) => state.enemy);

  useEffect(() => {
    function wander() {
      useStore.getState().moveEnemy();
    }

    if (gameState === "running") {
      intervalID = setInterval(wander, useStore.getState().enemy.interval);
    }

    return () => clearInterval(intervalID);
  }, [gameState]);

  return (
    <div
      ref={enemyRef}
      style={{
        position: "absolute",
        top: `${enemy.position.y}%`,
        left: `${enemy.position.x}%`,
        width: `${enemy.size}px`,
        height: `${enemy.size}px`,
        background: gameState === "running" ? "red" : "grey",
        transform: `translate3d(-${enemy.size / 2}px, -${enemy.size / 2}px, 0)`,
        transition: `top ${enemy.interval}ms, left ${enemy.interval}ms, background 0.25s`
      }}
    ></div>
  );
}
