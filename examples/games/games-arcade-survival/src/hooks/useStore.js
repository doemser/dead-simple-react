import create from "zustand";
import { randomNumber } from "../utils";

const initialPlayer = {
  speed: 2,
  size: 10,
  position: { x: 50, y: 50 }
};

const initialEnemy = {
  size: 100,
  interval: 750,
  actions: 0,
  position: { x: 50, y: -20 }
};

const useStore = create((set) => ({
  gameState: "waiting",
  player: initialPlayer,
  enemy: initialEnemy,

  setGameState: (gameState) => set({ gameState }),
  resetGame: () =>
    set({ gameState: "waiting", player: initialPlayer, enemy: initialEnemy }),
  movePlayer: (x, y) =>
    set(({ player }) => ({
      player: {
        ...player,
        position: {
          x: player.position.x + x * player.speed,
          y: player.position.y + y * player.speed
        }
      }
    })),
  moveEnemy: () =>
    set(({ enemy }) => {
      const direction = randomNumber(0, 1);
      return {
        enemy: {
          ...enemy,
          actions: enemy.actions + 1,
          position: {
            x: direction === 1 ? randomNumber(0, 100) : enemy.position.x,
            y: direction === 0 ? randomNumber(0, 100) : enemy.position.y
          }
        }
      };
    })
}));

export default useStore;
