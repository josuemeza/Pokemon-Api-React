import React, { Fragment } from "react";

export const Modal = ({ children, show }) => {
  return <Fragment>{show && <div>{children}</div>}</Fragment>;
};
