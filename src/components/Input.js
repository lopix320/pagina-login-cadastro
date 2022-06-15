import React from "react";

const Input = (props, { id, type, style }) => {
  return <input style={style} id={id} type={type} {...props} />;
};

export default Input;
