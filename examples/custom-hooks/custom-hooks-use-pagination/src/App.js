import { useState } from "react";

function usePagination(initialValue = 1) {
  const [page, setPage] = useState(initialValue);

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    setPage(page + 1);
  }

  function goToPage(page) {
    setPage(page);
  }

  // Returns all the handler functions within an object.
  return { page, previousPage, nextPage, goToPage };
}

export default function App() {
  const { page, previousPage, nextPage, goToPage } = usePagination();

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
