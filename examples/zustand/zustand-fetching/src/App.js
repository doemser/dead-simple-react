import create from "zustand";
import { useEffect } from "react";

const useStore = create((set) => ({
  planets: undefined,
  fetchPlanets: async () => {
    try {
      const response = await fetch("https://swapi.dev/api/planets");
      const planets = await response.json();
      set({ planets: planets.results });
    } catch (error) {
      console.error(`dead-simple-error: ${error}`);
    }
  }
}));

export default function App() {
  const planets = useStore((state) => state.planets);

  useEffect(() => {
    useStore.getState().fetchPlanets();
  }, []);

  return (
    <>
      <h1>zustand.js</h1>
      <h2>Fetching</h2>

      {planets?.map((planet) => {
        return <li key={planet.name}>{planet.name}</li>;
      })}
    </>
  );
}
