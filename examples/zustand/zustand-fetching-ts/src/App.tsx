import create from "zustand";
import { useEffect } from "react";

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

interface StoreState {
  planets: Planet[];
  fetchPlanets: (url: string) => void;
}

// Global state management
const useStore = create<StoreState>()((set) => ({
  planets: [],
  fetchPlanets: async (url: string) => {
    try {
      const response = await fetch(url);
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
