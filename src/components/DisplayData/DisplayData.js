import React, { useState } from "react";
// eslint-disable-next-line
import classes from "./DisplayData.module.css";

import { EditableRow, ReadOnlyRow } from "../../components";

const DisplayData = ({ data }) => {
  const [editContactId, setEditContactId] = useState("");

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
                    setEditRow={setEditRow}
                  />
                </>
              ) : (
                <>
                  <ReadOnlyRow
                    id={eachItem.id}
                    name={eachItem.name}
                    email={eachItem.email}
                    role={eachItem.role}
                    setEditRow={setEditRow}
                  />
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
