import React from "react";

import { Row } from "react-materialize";

import PageTitle from "../../components/PageTitle/PageTitle";
import RenderCatalog from "../../components/RenderCatalog/RenderCatalog";

import "./CatalogPages.sass";

const DrinksPage = props => {
  return (
    <>
      <PageTitle title="Напитки" />
      <Row className="catalogContainer">
        <RenderCatalog typeProduct={`drinks`} />
      </Row>
    </>
  );
};

export default DrinksPage;
