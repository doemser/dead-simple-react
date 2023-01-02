import useGame from "../hooks/useGame";

const style = {
  margin: "5px",
  height: "40px"
};

export default function MemoryCard({ card: { id, name, matched } }) {
  const { active, check, chooseCard } = useGame(id);

  return (
    <>
      {matched ? (
        <div style={style}></div>
      ) : (
        <button
          onClick={() => {
            if (!check && !active) {
              chooseCard(id);
            }
          }}
          style={{
            ...style,
            border: `2px solid black`,
            transition: "transform 0.5s, background 0.25s",
            background: !active && "black",
            transform: active
              ? `rotate3d(0,1,0,0deg)`
              : `rotate3d(0,1,0,180deg)`
          }}
        >
          {active && name}
        </button>
      )}
    </>
  );
}
