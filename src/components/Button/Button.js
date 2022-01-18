import React from "react";
import css from "./Button.module.css";

function Button({ text, type, onClick, onSubmit, active }) {
  return (
    <button
      type={type}
      className={css.button}
      onClick={onClick}
      style={active}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
}

export default Button;
