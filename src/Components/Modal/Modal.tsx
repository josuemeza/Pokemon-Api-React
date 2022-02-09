import React, { Fragment } from "react";

export const Modal = ({ children, show }: any) => {
  return <Fragment>{show && <div>{children}</div>}</Fragment>;
};
