import useStore from "./useStore";

export default function useChosen(id: string = "") {
  const chosen = useStore((state) => state.chosen);
  const active = !id ? false : chosen.includes(id);
  const check = chosen.length === 2;
  return { active, check };
}
