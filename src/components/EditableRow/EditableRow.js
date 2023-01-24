import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionTabEditing } from "../../components";
import { dataActions } from "../../store/dataSlice";
// eslint-disable-next-line
import classes from "./EditableRow.module.css";

const EditableRow = ({ id, name, email, role, setEditRow }) => {
  const dispatch = useDispatch();

  const [namePlaceholder, setNamePlaceholder] = useState("Name");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [rolePlaceholder, setRolePlaceholder] = useState("Role");

  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  const [inputRole, setInputRole] = useState(role);

  const nameChangeHandler = (e) => {
    setNamePlaceholder("Name");
    setInputName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmailPlaceholder("Email");
    setInputEmail(e.target.value);
  };

  const roleChangeHandler = (e) => {
    setRolePlaceholder("Role");
    setInputRole(e.target.value);
  };

  const editDataHandler = () => {
    if (inputName.trim() === "") {
      setInputName("");
      setNamePlaceholder("Name Please!");
      return;
    }
    if (inputEmail.trim() === "") {
      setInputEmail("");
      setEmailPlaceholder("Email Please!");
      return;
    }
    if (inputRole.trim() === "") {
      setInputRole("");
      setRolePlaceholder("Role Please!");
      return;
    }

    dispatch(
      dataActions.editData({
        id: id,
        name: inputName,
        email: inputEmail,
        role: inputRole,
      })
    );
    setEditRow("");
  };

  const noChangeSetEditRow = () => {
    setEditRow("");
  };

  return (
    <>
      <td>
        <input
          className={classes.input}
          value={inputName}
          onChange={nameChangeHandler}
          placeholder={namePlaceholder}
        />
      </td>
      <td>
        <input
          className={classes.input}
          value={inputEmail}
          onChange={emailChangeHandler}
          placeholder={emailPlaceholder}
        />
      </td>
      <td>
        <input
          className={classes.input}
          value={inputRole}
          onChange={roleChangeHandler}
          placeholder={rolePlaceholder}
        />
      </td>
      <td>
        <ActionTabEditing
          id={id}
          editRowComplete={editDataHandler}
          setLeaveEditRow={noChangeSetEditRow}
        />
      </td>
    </>
  );
};

export default EditableRow;
