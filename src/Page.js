import React from "react";
// import classNames from "classnames";

import './styles/Page.css';

const Page = ({ children, toLeft }) => {
  return <section className="page">{children}</section>;
};

export default Page;
