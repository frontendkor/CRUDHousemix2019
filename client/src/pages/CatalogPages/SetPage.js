import React from "react";

import { Row } from "react-materialize";

import PageTitle from "../../components/PageTitle/PageTitle";
import RenderCatalog from "../../components/RenderCatalog/RenderCatalog";

import "./CatalogPages.sass";

const SetPage = props => {
  return (
    <>
      <PageTitle title="Сеты" />
      <Row className="catalogContainer">
        <RenderCatalog typeProduct={`sets`} />
      </Row>
    </>
  );
};

export default SetPage;
