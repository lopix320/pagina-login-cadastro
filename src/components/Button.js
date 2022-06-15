import React from "react";

const Button = ({ style, onClick, children }) => {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
