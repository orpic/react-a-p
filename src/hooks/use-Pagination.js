import { useState, useEffect } from "react";

const usePagination = (searchResults) => {
  const [recordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const [currentRecords, setCurrentRecords] = useState(
    searchResults.slice(indexOfFirstRecord, indexOfLastRecord)
  );
  const nPages = Math.ceil(searchResults.length / recordsPerPage);

  useEffect(() => {
    setCurrentRecords(
      searchResults.slice(indexOfFirstRecord, indexOfLastRecord)
    );
  }, [searchResults, currentPage, indexOfFirstRecord, indexOfLastRecord]);

  return [currentPage, setCurrentPage, currentRecords, nPages];
};

export default usePagination;
