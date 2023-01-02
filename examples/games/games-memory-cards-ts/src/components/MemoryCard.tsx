import { MemoryCardProps } from "../interfaces";
import useStore from "../hooks/useStore";
import useChosen from "../hooks/useChosen";

const style = {
  margin: "5px",
  height: "40px"
};

export default function MemoryCard({
  card: { id, name, matched }
}: MemoryCardProps) {
  const chooseCard = useStore((state) => state.chooseCard);
  const { active, check } = useChosen(id);

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
            background: !active ? "black" : "transparent",
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
