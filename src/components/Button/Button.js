import React from "react";
import css from "./Button.module.css";

function Button({
  text, type, id, onClick, onSubmit, style
}) {

  return (
    <button
      id={id}
      type={type}
      className={css.button}
      onClick={onClick}
      style={style}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
}

export default Button;
