import React from "react";

import "./PageTitle.sass";

const PageTitle = props => {
  const { title, classis } = props;
  return <h3 className={`PageTitle ${classis}`}>{title}</h3>;
};

export default PageTitle;
