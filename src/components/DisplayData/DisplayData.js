import React, { useState } from "react";
// eslint-disable-next-line
import classes from "./DisplayData.module.css";

import {
  ActionTab,
  ActionTabEditing,
  EditableRow,
  ReadOnlyRow,
} from "../../components";

const DisplayData = ({ data }) => {
  const [editContactId, setEditContactId] = useState("2");

  const setEditRow = (row) => {
    setEditContactId(row);
  };

  return (
    <>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.checkbox}>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={classes.body}>
          {data.map((eachItem) => (
            <tr key={eachItem.id}>
              <td>
                <input
                  type="checkbox"
                  // value={"hello"}
                  // checked={false}
                  // onChange={}
                />
              </td>
              {editContactId === eachItem.id ? (
                <>
                  <EditableRow
                    id={eachItem.id}
                    name={eachItem.name}
                    email={eachItem.email}
                    role={eachItem.role}
                  />
                  <td>
                    <ActionTabEditing
                      id={eachItem.id}
                      setEditRow={setEditRow}
                    />
                  </td>
                </>
              ) : (
                <>
                  <ReadOnlyRow
                    id={eachItem.id}
                    name={eachItem.name}
                    email={eachItem.email}
                    role={eachItem.role}
                  />
                  <td>
                    <ActionTab id={eachItem.id} setEditRow={setEditRow} />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayData;
