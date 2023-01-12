import create from "zustand";

export interface Tile {
  id: string;
  player: string;
}

interface StoreState {
  gameBoard: Tile[][];
  player1: boolean;
  winner: null | string;
  chooseTile: (id: string) => void;
  checkWin: (gameBoard: Tile[][]) => void;
}

const gameBoard = Array.from({ length: 3 }, (_, rowIndex) =>
  Array.from({ length: 3 }, (_, tileIndex) => ({
    id: `o${rowIndex}x${tileIndex}`,
    player: ""
  }))
);

const useStore = create<StoreState>()((set) => ({
  gameBoard,
  player1: true,
  winner: null,
  chooseTile: (id) => {
    set((state) => ({
      gameBoard: state.gameBoard.map((row) =>
        row.map((tile) =>
          tile.id === id ? { ...tile, player: state.player1 ? "X" : "O" } : tile
        )
      ),
      player1: !state.player1
    }));
  },
  checkWin: (gameBoard) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        gameBoard[i][0].player === gameBoard[i][1].player &&
        gameBoard[i][1].player === gameBoard[i][2].player &&
        gameBoard[i][0].player !== ""
      ) {
        set({ winner: gameBoard[i][0].player });
        return;
      }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        gameBoard[0][i].player === gameBoard[1][i].player &&
        gameBoard[1][i].player === gameBoard[2][i].player &&
        gameBoard[0][i].player !== ""
      ) {
        set({ winner: gameBoard[0][i].player });
        return;
      }
    }
    // Check diagonals
    if (
      gameBoard[0][0].player === gameBoard[1][1].player &&
      gameBoard[1][1].player === gameBoard[2][2].player &&
      gameBoard[0][0].player !== ""
    ) {
      set({ winner: gameBoard[0][0].player });
      return;
    }
    if (
      gameBoard[0][2].player === gameBoard[1][1].player &&
      gameBoard[1][1].player === gameBoard[2][0].player &&
      gameBoard[0][2].player !== ""
    ) {
      set({ winner: gameBoard[0][2].player });
      return;
    }
    // No win
    return;
  }
}));

export default useStore;
