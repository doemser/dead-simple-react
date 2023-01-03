import useStore from "./useStore";
import { useEffect } from "react";

let collisionCheckID;

export default function useCollision(player, enemy) {
  const gameState = useStore((state) => state.gameState);

  useEffect(() => {
    function checkCollision() {
      const playerRect = player.current.getBoundingClientRect();
      const enemyRect = enemy.current.getBoundingClientRect();

      if (
        (playerRect.x < enemyRect.x + enemyRect.width &&
          playerRect.x + playerRect.width > enemyRect.x &&
          playerRect.y < enemyRect.y + enemyRect.height &&
          playerRect.y + playerRect.height > enemyRect.y) ||
        player.current.style.top === "0%" ||
        player.current.style.left === "0%" ||
        player.current.style.left === "100%" ||
        player.current.style.top === "100%"
      ) {
        useStore.getState().setGameState("game over");
      }
      if (gameState === "running") {
        collisionCheckID = requestAnimationFrame(checkCollision);
      }
    }

    checkCollision();

    return () => cancelAnimationFrame(collisionCheckID);
  }, [enemy, player, gameState]);
}
