import React from "react";

const Input = (props, { id, type }) => {
  return <input id={id} type={type} {...props} />;
};

export default Input;
