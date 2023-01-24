import React from "react";
//ceslint-disable-next-line
import classes from "./ActionTabEditing.module.css";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ActionTabEditing = ({ id, setEditRow }) => {
  const closeEditing = () => {
    setEditRow("");
  };
  return (
    <div className={classes.actionRow}>
      <div
        onClick={"editHandler"}
        className={`${classes.buttons} ${classes.edit}`}
      >
        <CheckIcon />
      </div>

      <div
        onClick={closeEditing}
        className={`${classes.buttons} ${classes.red}`}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default ActionTabEditing;
