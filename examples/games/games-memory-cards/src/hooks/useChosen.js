import useStore from "../hooks/useStore";

export default function useChosen(id) {
  const chosen = useStore((state) => state.chosen);
  const active = chosen.includes(id);
  const check = chosen.length === 2;
  return { active, check };
}
