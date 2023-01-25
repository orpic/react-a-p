import { useSelector } from "react-redux";
import {
  DisplayData,
  LoadingSpinner,
  Pagination,
  SearchBar,
} from "./components";
import { useDataFetch, useSearch } from "./hooks";
import { usePagination } from "./hooks";

function App() {
  useDataFetch();
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
  const [searchResults, setSearchText] = useSearch(data);

  const [currentPage, setCurrentPage, currentRecords, nPages] =
    usePagination(searchResults);

  const searchFilter = (input) => {
    setSearchText(input);
    setCurrentPage(1);
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Admin UI</h1>
        <SearchBar onInputChange={searchFilter} />
        {status === "pending" ? (
          <LoadingSpinner />
        ) : (
          <DisplayData
            data={currentRecords}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {!(status === "pending") && (
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
}

export default App;
