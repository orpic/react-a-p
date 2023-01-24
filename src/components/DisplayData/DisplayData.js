import React, { useState } from "react";
// eslint-disable-next-line
import classes from "./DisplayData.module.css";

import { ActionTab, EditableRow } from "../../components";

const DisplayData = ({ data }) => {
  const [editContactId, setEditContactId] = useState("2");

  return (
    <>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>
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
                <EditableRow
                  name={eachItem.name}
                  email={eachItem.email}
                  role={eachItem.role}
                />
              ) : (
                <>
                  <td>{eachItem.name} </td>
                  <td>{eachItem.email} </td>
                  <td>{eachItem.role} </td>
                </>
              )}
              <td>
                <ActionTab id={eachItem.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayData;
