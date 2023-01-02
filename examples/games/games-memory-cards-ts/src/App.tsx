import { useEffect } from "react";
import PlayGround from "./components/PlayGround";
import MemoryCard from "./components/MemoryCard";
import useStore from "./hooks/useStore";
import useGame from "./hooks/useGame";

export default function App() {
  const { cards, score, check, gameOver } = useGame();

  useEffect(() => {
    let timeoutID: NodeJS.Timeout;
    if (check) {
      timeoutID = setTimeout(useStore.getState().checkMatch, 1000);
    }
    return () => {
      clearTimeout(timeoutID);
    };
  }, [check]);

  return (
    <>
      <h1>Memory Card Game</h1>
      <p>
        Tries: {score.tries} Matches: {score.matches}
      </p>
      {gameOver && <h2>good job.</h2>}
      <PlayGround>
        {cards.map((card) => {
          return <MemoryCard key={card.id} card={card} />;
        })}
      </PlayGround>
    </>
  );
}
