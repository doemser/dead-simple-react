import { nanoid } from "nanoid";
import { Card } from "./interfaces";

export function doubleShuffleIDAndMore(array: string[]) {
  return [...array, ...array]
    .sort(() => Math.random() - 0.5)
    .map((element) => ({
      name: element,
      id: nanoid(5),
      matched: false
    }));
}

export function hasMatchingNames(ids: string[], objects: Card[]) {
  const [firstID, secondID] = ids.map((id) =>
    objects.find((object) => object.id === id)
  );
  if (!firstID || !secondID) {
    return false;
  }
  return firstID.name === secondID.name;
}

export function setMatched(ids: string[], objects: Card[]) {
  return objects.map((object) =>
    ids.includes(object.id) ? { ...object, matched: true } : object
  );
}
