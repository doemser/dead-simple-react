import create from "zustand";
import { nanoid } from "nanoid";
import { mapSize, tileSize, operations, speed } from "../utils/config";
import { randomColor } from "../utils/random";

interface MapTile {
  id: string;
  alive: number;
  neighbors: number;
  color: string;
}

interface StoreState {
  speed: number;
  run: boolean;
  setRun: () => void;
  setSpeed: (speed: number) => void;
  sizes: { mapSize: number; tileSize: number };
  mapTiles: MapTile[][];
  setRandomTiles: () => void;
  resetTiles: () => void;
  toggleTile: (id: string) => void;
  checkNeighbors: () => void;
  nextGeneration: () => void;
}

const useStore = create<StoreState>((set) => ({
  speed,
  run: false,
  setRun: () => {
    set(({ run }) => ({ run: !run }));
  },
  setSpeed: (speed) => {
    set({ speed });
  },
  sizes: { mapSize, tileSize },
  mapTiles: Array.from({ length: mapSize }, () => {
    return Array.from({ length: mapSize }, () => {
      return {
        id: nanoid(),
        alive: 0,
        neighbors: 0,
        color: randomColor()
      };
    });
  }),
  setRandomTiles: () => {
    set(({ mapTiles }) => {
      return {
        mapTiles: mapTiles.map((column) => {
          return column.map((tile) => {
            return {
              ...tile,
              alive: Math.round(Math.random() * 0.6),
              color: randomColor()
            };
          });
        })
      };
    });
  },
  resetTiles: () => {
    set(({ mapTiles }) => ({
      mapTiles: mapTiles.map((column) => {
        return column.map((tile) => {
          return {
            ...tile,
            alive: 0
          };
        });
      })
    }));
  },
  toggleTile: (id) => {
    set(({ mapTiles }) => ({
      mapTiles: mapTiles.map((column) => {
        return column.map((tile) => {
          return tile.id === id ? { ...tile, alive: tile.alive } : tile;
        });
      })
    }));
  },
  checkNeighbors: () => {
    set(({ mapTiles }) => ({
      mapTiles: mapTiles.map((column, columnIndex) => {
        return column.map((tile, tileIndex) => {
          let neighbors = 0;
          operations.forEach((operation) => {
            const col = columnIndex + operation[0];
            const row = tileIndex + operation[1];
            if (
              col >= 0 &&
              row >= 0 &&
              col < mapTiles.length &&
              row < mapTiles[col].length &&
              mapTiles[col][row].alive
            ) {
              neighbors++;
            }
          });

          return { ...tile, neighbors };
        });
      })
    }));
  },
  nextGeneration: () => {
    set(({ mapTiles }) => ({
      mapTiles: mapTiles.map((column) => {
        return column.map((tile) => {
          if (
            (tile.alive && tile.neighbors < 2) ||
            (tile.alive && tile.neighbors > 3)
          ) {
            return { ...tile, alive: 0 };
          } else if (
            (!tile.alive && tile.neighbors === 3) ||
            (tile.alive && (tile.neighbors === 2 || tile.neighbors === 3))
          ) {
            return { ...tile, alive: 1, color: randomColor() };
          } else {
            return tile;
          }
        });
      })
    }));
  }
}));

export default useStore;
