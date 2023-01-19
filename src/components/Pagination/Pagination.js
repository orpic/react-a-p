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
        <ul className={classes.ul}>
          <li className={classes.li}>
            <a className={classes.a} onClick={prevPage} href="#no-link">
              Previous
            </a>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li className={classes.li} key={pageNumber}>
              <a
                className={`${classes.a}  ${
                  currentPage === pageNumber ? classes.act : ""
                }`}
                onClick={() => setCurrentPage(pageNumber)}
                href="#no-link"
              >
                {pageNumber}
              </a>
            </li>
          ))}
          <li className={classes.li}>
            <a className={classes.a} onClick={nextPage} href="#no-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
