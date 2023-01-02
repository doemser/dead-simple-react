export interface PlayGroundProps {
  children: React.ReactNode;
}

export interface Card {
  name: string;
  id: string;
  matched: boolean;
}

export interface MemoryCardProps {
  card: Card;
}

export interface StoreState {
  cards: Card[];
  chosen: string[];
  score: { tries: number; matches: number };
  chooseCard: (id: string) => void;
  checkMatch: () => void;
}
