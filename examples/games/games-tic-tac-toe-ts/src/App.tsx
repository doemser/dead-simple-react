import { useEffect } from "react";
import useStore from "./store/useStore";
import GameInfo from "./components/GameInfo";
import Playground from "./components/Playground";
import TileButton from "./components/TileButton";

export default function App() {
  const gameBoard = useStore((state) => state.gameBoard);

  useEffect(() => {
    useStore.getState().checkWin(gameBoard);
  }, [gameBoard]);

  return (
    <>
      <h1>TicTacToe</h1>
      <GameInfo />
      <Playground>
        {gameBoard.map((row) => {
          return row.map((tile) => <TileButton key={tile.id} tile={tile} />);
        })}
      </Playground>
    </>
  );
}
