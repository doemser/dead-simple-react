import useStore from "../store/useStore";

export default function TileButton({ tile }) {
  const chooseTile = useStore((state) => state.chooseTile);
  const winner = useStore((state) => state.winner);

  return (
    <button
      key={tile.id}
      style={{
        border: "2px solid black",
        width: "50px",
        height: "50px",
        fontSize: "x-large"
      }}
      onClick={() => {
        if (!winner && !tile.player) {
          chooseTile(tile.id);
        }
      }}
    >
      {tile.player}
    </button>
  );
}
