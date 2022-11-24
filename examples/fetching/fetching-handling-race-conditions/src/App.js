import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      setLoading(true);

      const response = await fetch(`https://swapi.dev/api/people/${page}`);

      if (!ignore) {
        const data = await response.json();
        setPeople(data);
        setLoading(false);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [page]);

  return (
    <>
      <h1>Fetching</h1>
      <h2>handle race conditions</h2>

      <p>Page: {page}</p>
      <button
        type="button"
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        next Page
      </button>

      <h2>{loading ? "loading.." : people?.name}</h2>
    </>
  );
}
