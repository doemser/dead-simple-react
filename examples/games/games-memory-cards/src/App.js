import { useEffect } from "react";
import PlayGround from "./components/PlayGround";
import MemoryCard from "./components/MemoryCard";
import useStore from "./hooks/useStore";
import useChosen from "./hooks/useChosen";

export default function App() {
  const cards = useStore((state) => state.cards);
  const score = useStore((state) => state.score);
  const gameOver = score.matches === cards.length / 2;
  const { check } = useChosen();

  useEffect(() => {
    let timeoutID;
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
