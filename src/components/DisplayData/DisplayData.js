import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import classes from "./DisplayData.module.css";

import { EditableRow, ReadOnlyRow } from "../../components";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/dataSlice";

const DisplayData = ({ data, currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();

  const [editContactId, setEditContactId] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  // single checkbox
  const onSingleCheckboxChangeHandler = (e) => {
    setSelectedIds((prevState) => {
      if (prevState?.includes(e.target.value.toString())) {
        return prevState.filter((item) => item !== e.target.value.toString());
      }
      return [...prevState, e.target.value.toString()];
    });
  };

  // all checkboxes
  const onAllCheckboxChangeHandler = () => {
    if (selectedIds.length === data.length) {
      setSelectedIds([]);
    } else {
      const dataIds = data.map((item) => item.id);
      setSelectedIds(dataIds);
    }
  };

  //on mulitple delete
  const onMulitpleDeleteHandler = () => {
    dispatch(dataActions.deleteData(selectedIds));
    setCurrentPage(1);
    setSelectedIds([]);
  };

  //reset selected ids for each pagination
  useEffect(() => {
    setSelectedIds([]);
  }, [currentPage]);

  // console.log(selectedIds);
  //which row is being edited
  const setEditRow = (row) => {
    setEditContactId(row);
  };

  return (
    <>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.checkbox}>
              <input
                type="checkbox"
                checked={selectedIds.length === data.length}
                onChange={onAllCheckboxChangeHandler}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={classes.body}>
          {data.map((eachItem) => (
            <tr
              key={eachItem.id}
              className={`${
                selectedIds.includes(eachItem.id) ? classes.selected : ""
              }`}
            >
              <td>
                <input
                  type="checkbox"
                  value={eachItem.id}
                  checked={selectedIds.includes(eachItem.id)}
                  onChange={onSingleCheckboxChangeHandler}
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
      {selectedIds.length > 0 && (
        <div className={classes.buttondiv}>
          <button onClick={onMulitpleDeleteHandler} className={classes.button}>
            Delete Selected
          </button>
        </div>
      )}
    </>
  );
};

export default DisplayData;
