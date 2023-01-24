import React from "react";
// eslint-disable-next-line
import classes from "./EditableRow.module.css";

const EditableRow = ({ name, email, role }) => {
  return (
    <>
      <td>
        <input className={classes.input} value={name} />
      </td>
      <td>
        <input value={email} />
      </td>
      <td>
        <input value={role} />
      </td>
    </>
  );
};

export default EditableRow;
