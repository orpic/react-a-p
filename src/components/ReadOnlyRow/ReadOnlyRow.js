import React from "react";
import { ActionTab } from "../../components";

const ReadOnlyRow = ({ id, name, email, role, setEditRow }) => {
  return (
    <>
      <td>{name} </td>
      <td>{email} </td>
      <td>{role} </td>
      <td>
        <ActionTab id={id} setEditRow={setEditRow} />
      </td>
    </>
  );
};

export default ReadOnlyRow;
