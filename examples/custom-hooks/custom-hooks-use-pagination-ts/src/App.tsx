import { useState } from "react";

function usePagination(initialValue: number = 1, maxValue: number) {
  const [page, setPage] = useState<number>(initialValue);

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    if (!maxValue || page < maxValue) {
      setPage(page + 1);
    }
  }

  function goToPage(page: number) {
    setPage(page);
  }

  // Returns all the handler functions and the current page within an object.
  return { page, previousPage, nextPage, goToPage };
}

export default function App() {
  const { page, previousPage, nextPage, goToPage } = usePagination(1, 10);

  return (
    <>
      <h1>Pagination hook</h1>
      Page: {page}
      <br />
      <button type="button" onClick={previousPage}>
        previous
      </button>
      <button type="button" onClick={nextPage}>
        next
      </button>
      <button
        type="button"
        onClick={() => {
          goToPage(10);
        }}
      >
        go to Page 10
      </button>
    </>
  );
}
