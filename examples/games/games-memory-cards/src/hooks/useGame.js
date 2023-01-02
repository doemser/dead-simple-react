import useStore from "../hooks/useStore";

export default function useGame(id) {
  const cards = useStore((state) => state.cards);
  const score = useStore((state) => state.score);
  const chosen = useStore((state) => state.chosen);
  const chooseCard = useStore((state) => state.chooseCard);

  const active = id ? chosen.includes(id) : false;
  const check = chosen.length === 2;
  const gameOver = score.matches === cards.length / 2;

  return { cards, score, chosen, active, check, gameOver, chooseCard };
}
