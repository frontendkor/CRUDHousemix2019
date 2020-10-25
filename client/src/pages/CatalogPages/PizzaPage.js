import React from "react";

import { Row } from "react-materialize";

import PageTitle from "../../components/PageTitle/PageTitle";
import RenderCatalog from "../../components/RenderCatalog/RenderCatalog";

import "./CatalogPages.sass";

const PizzaPage = props => {
  return (
    <>
      <PageTitle title="Пицца" />
      <Row className="catalogContainer">
        <RenderCatalog typeProduct={`pizza`} />
      </Row>
    </>
  );
};

export default PizzaPage;
