import { useEffect } from "react";
import useWASD from "use-wasd";
import useStore from "./useStore";

const useWASDOptions = {
  allow: ["w", "a", "s", "d"],
  combos: {
    upLeft: ["w", "a"],
    upRight: ["w", "d"],
    downLeft: ["a", "s"],
    downRight: ["d", "s"]
  }
};

export default function usePlayer() {
  const { w, a, s, d, upLeft, upRight, downLeft, downRight } = useWASD(
    useWASDOptions
  );
  const player = useStore((state) => state.player);

  useEffect(() => {
    function controlPlayer() {
      if (useStore.getState().gameState === "running") {
        if (upLeft) {
          useStore.getState().movePlayer(-1, -1);
        } else if (upRight) {
          useStore.getState().movePlayer(1, -1);
        } else if (downLeft) {
          useStore.getState().movePlayer(-1, 1);
        } else if (downRight) {
          useStore.getState().movePlayer(1, 1);
        } else if (w) {
          useStore.getState().movePlayer(0, -1);
        } else if (s) {
          useStore.getState().movePlayer(0, 1);
        } else if (a) {
          useStore.getState().movePlayer(-1, 0);
        } else if (d) {
          useStore.getState().movePlayer(1, 0);
        }
      }
    }

    const animationID = requestAnimationFrame(controlPlayer);

    return () => {
      cancelAnimationFrame(animationID);
    };
  }, [w, a, s, d, upLeft, upRight, downLeft, downRight, player]);

  return player;
}
