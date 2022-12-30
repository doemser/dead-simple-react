import { nanoid } from "nanoid";

export function doubleShuffleIDAndMore(array) {
  return [...array, ...array]
    .sort(() => Math.random() - 0.5)
    .map((element) => ({
      name: element,
      id: nanoid(5),
      matched: false
    }));
}

export function hasMatchingNames(ids, objects) {
  const [firstID, secondID] = ids.map((id) =>
    objects.find((object) => object.id === id)
  );
  return firstID.name === secondID.name;
}

export function setMatched(ids, objects) {
  return objects.map((object) =>
    ids.includes(object.id) ? { ...object, matched: true } : object
  );
}
