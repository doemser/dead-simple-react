import useStore from "../hooks/useStore";

export default function Controls() {
  const run = useStore((state) => state.run);
  const speed = useStore((state) => state.speed);
  const setSpeed = useStore((state) => state.setSpeed);
  const setRun = useStore((state) => state.setRun);
  const setRandomTiles = useStore((state) => state.setRandomTiles);
  const resetTiles = useStore((state) => state.resetTiles);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setRun();
        }}
      >
        {run ? "stop" : "start"}
      </button>
      <button
        type="button"
        onClick={() => {
          setRandomTiles();
        }}
      >
        random
      </button>
      <button
        type="button"
        onClick={() => {
          resetTiles();
        }}
      >
        clear
      </button>
      <hr />
      <label>
        fast
        <input
          type="range"
          min="50"
          max="1000"
          value={speed}
          onChange={(event) => {
            setSpeed(Number(event.target.value));
          }}
        />
        slow
      </label>
      <hr />
    </>
  );
}
