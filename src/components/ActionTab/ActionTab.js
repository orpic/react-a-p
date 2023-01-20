import React from "react";
// eslint-disable-next-line
import classes from "./ActionTab.module.css";
// import CheckIcon from "@mui/icons-material/Check";
// import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionTab = ({ id }) => {
  return (
    <div className={classes.actionRow}>
      <div className={`${classes.buttons} ${classes.edit}`}>
        <EditIcon />
      </div>

      <div className={`${classes.buttons} ${classes.red}`}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default ActionTab;
