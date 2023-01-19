import React from "react";
// eslint-disable-next-line
import classes from "./Pagination.module.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <a onClick={prevPage} href="#no-link">
              Previous
            </a>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li key={pgNumber}>
              <a onClick={() => setCurrentPage(pgNumber)} href="#no-link">
                {pgNumber}
              </a>
            </li>
          ))}
          <li>
            <a onClick={nextPage} href="#no-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
