import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<Record<string, string | string[]>>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      setLoading(true);

      const response = await fetch(`https://swapi.dev/api/people/${page}`);

      // Use response only if ignore is false.
      if (!ignore) {
        const data = await response.json();
        setPerson(data);
        setLoading(false);
      }
    }

    startFetching();

    // This function is called when unmounting the component
    // and is executed the first time before the second rendering.
    // This ensures that our last request is the last result,
    // no matter how long the responses take.
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

      <h2>{loading ? "loading.." : person?.name}</h2>
    </>
  );
}
