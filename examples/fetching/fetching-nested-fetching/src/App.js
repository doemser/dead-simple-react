import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState();

  useEffect(() => {
    async function startFetching() {
      setLoading(true);

      const response = await fetch(`https://swapi.dev/api/people/1`);
      const data = await response.json();

      const homeworld = await fetch(data.homeworld);
      data.homeworld = await homeworld.json();

      setPerson(data);
      setLoading(false);
    }

    startFetching();
  }, []);

  return (
    <>
      <h1>Fetching</h1>
      <h2>nested fetching</h2>

      {loading ? (
        "loading.."
      ) : (
        <p>
          {person?.name} is from {person?.homeworld.name}.
        </p>
      )}
    </>
  );
}
