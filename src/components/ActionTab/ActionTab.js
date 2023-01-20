import React from "react";
// eslint-disable-next-line
import classes from "./ActionTab.module.css";
// import CheckIcon from "@mui/icons-material/Check";
// import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionTab = () => {
  return (
    <>
      <button>
        <EditIcon />
      </button>

      <button>
        <DeleteIcon />
      </button>
    </>
  );
};

export default ActionTab;