import s from "../Dialogs.module.css";
import React from "react";

export const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};
