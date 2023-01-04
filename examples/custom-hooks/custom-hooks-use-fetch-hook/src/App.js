import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const result = await response.json();
          setData(result);
          setLoading(false);
        } else {
          setLoading(false);
          setError(true);
          console.error("Bad Response");
        }
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error(error);
      }
    }

    fetchData();

    return () => {
      setLoading(false);
      setError(false);
    };
  }, [url]);

  return { data, loading, error };
}

export default function App() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `https://swapi.dev/api/people/${page}`
  );

  return (
    <>
      <h1>Fetch hook</h1>
      <p>{page}</p>
      <button
        type="button"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        next page
      </button>
      {loading || error ? (
        <p>{loading ? "loading.." : "error"}</p>
      ) : (
        <code>
          <pre>{JSON.stringify(data, null, 3)}</pre>
        </code>
      )}
    </>
  );
}
