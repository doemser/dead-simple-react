import create from "zustand";
import { useEffect } from "react";

// Global state management
const useStore = create((set) => ({
  planets: undefined,
  fetchPlanets: async (url) => {
    try {
      const response = await fetch(url);
      const planets = await response.json();
      set({ planets: planets.results });
    } catch (error) {
      console.error(`dead-simple-error: ${error}`);
    }
  },
}));

export default function App() {
  const planets = useStore((state) => state.planets);

  useEffect(() => {
    // Using this syntax allows us to not have to write
    // the function into the dependency array.
    useStore.getState().fetchPlanets("https://swapi.dev/api/planets");
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
