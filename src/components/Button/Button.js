import React from 'react';
import css from './Button.module.css';

function Button({ text, type, id, onClick, onSubmit, style, className }) {
  return (
    <button
      id={id}
      type={type}
      className={`${css.button} ${className}`}
      onClick={onClick}
      style={style}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
}

export default Button;
