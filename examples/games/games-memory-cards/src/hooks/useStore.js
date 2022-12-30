import { doubleShuffleIDAndMore, hasMatchingNames, setMatched } from "../utils";
import create from "zustand";

const cards = ["love", "yes", "boah", "lol", "kiss", "yeah", "what", "nice"];

const useStore = create((set) => ({
  cards: doubleShuffleIDAndMore(cards),
  chosen: [],
  score: { tries: 0, matches: 0 },
  chooseCard: (id) => {
    set(({ chosen }) => ({
      chosen: [...chosen, id]
    }));
  },
  checkMatch: () => {
    set(({ chosen, cards, score }) => {
      if (hasMatchingNames(chosen, cards)) {
        return {
          cards: setMatched(chosen, cards),
          chosen: [],
          score: {
            tries: score.tries + 1,
            matches: score.matches + 1
          }
        };
      } else {
        return {
          chosen: [],
          score: { ...score, tries: score.tries + 1 }
        };
      }
    });
  }
}));

export default useStore;
