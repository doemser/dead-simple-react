import { useEffect } from "react";
import useStore from "../hooks/useStore";

let live;

export default function Life() {
  const run = useStore((state) => state.run);
  const speed = useStore((state) => state.speed);

  useEffect(() => {
    function startLiving() {
      useStore.getState().checkNeighbors();
      useStore.getState().nextGeneration();
    }
    if (run) {
      live = setInterval(startLiving, speed);
    }
    return () => {
      clearInterval(live);
    };
  }, [run, speed]);

  return null;
}
