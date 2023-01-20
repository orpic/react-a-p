import React from "react";
// eslint-disable-next-line
import classes from "./DisplayData.module.css";

import { ActionTab } from "../../components";

const DisplayData = ({ data }) => {
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
                <input type="checkbox" />
              </td>
              <td>{eachItem.name} </td>
              <td>{eachItem.email} </td>
              <td>{eachItem.role} </td>
              <td>
                <ActionTab
                  deleteFunc={console.log("del function")}
                  editFunc={console.log("edit function")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayData;
