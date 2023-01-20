import React from "react";
// eslint-disable-next-line
import classes from "./ActionTab.module.css";
// import CheckIcon from "@mui/icons-material/Check";
// import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionTab = ({ editFunc, deleteFunc }) => {
  const editHandler = () => {};

  const deleteHandler = () => {};

  return (
    <div className={classes.actionRow}>
      <div
        onClick={editHandler}
        className={`${classes.buttons} ${classes.edit}`}
      >
        <EditIcon />
      </div>

      <div
        onClick={deleteHandler}
        className={`${classes.buttons} ${classes.red}`}
      >
        <DeleteIcon />
      </div>
    </div>
  );
};

export default ActionTab;
