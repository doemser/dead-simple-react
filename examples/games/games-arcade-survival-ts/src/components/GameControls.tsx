import useStore from "../hooks/useStore";

export default function GameControls() {
  const gameState = useStore((state) => state.gameState);
  const enemy = useStore((state) => state.enemy);
  const setGameState = useStore((state) => state.setGameState);
  const resetGame = useStore((state) => state.resetGame);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (gameState === "waiting" || gameState === "restart") {
            setGameState("running");
          } else if (gameState === "running") {
            setGameState("paused");
          } else if (gameState === "paused") {
            setGameState("running");
          } else if (gameState === "game over") {
            resetGame();
          }
        }}
      >
        {gameState === "waiting"
          ? "start game"
          : gameState === "running"
          ? "pause game"
          : gameState === "paused"
          ? "unpause game"
          : gameState === "game over"
          ? "try again"
          : "error mode"}
      </button>{" "}
      survived {enemy.actions} actions - {gameState}
    </>
  );
}
