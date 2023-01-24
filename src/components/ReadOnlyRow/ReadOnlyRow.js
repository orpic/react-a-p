import React from "react";
// eslint-disable-next-line
import classes from "./ReadOnlyRow.module.css";

const ReadOnlyRow = ({ name, email, role }) => {
  return (
    <>
      <td>{name} </td>
      <td>{email} </td>
      <td>{role} </td>
    </>
  );
};

export default ReadOnlyRow;
