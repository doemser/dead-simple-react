import useStore from "../store/useStore";

export default function GameInfo() {
  const player1 = useStore((state) => state.player1);
  const winner = useStore((state) => state.winner);
  return (
    <>
      {winner ? (
        <h2>Player {winner} won!</h2>
      ) : (
        <p>Player {player1 ? "X" : "O"}'s turn.</p>
      )}
    </>
  );
}
