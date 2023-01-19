import React from "react";
// eslint-disable-next-line
import classes from "./DisplayData.module.css";

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
            <tr id={eachItem.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{eachItem.name} </td>
              <td>{eachItem.email} </td>
              <td>{eachItem.role} </td>
              <td>Actions</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayData;
