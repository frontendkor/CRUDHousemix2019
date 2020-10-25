import React from "react";

import { Row } from "react-materialize";

import PageTitle from "../../components/PageTitle/PageTitle";
import RenderCatalog from "../../components/RenderCatalog/RenderCatalog";

import "./CatalogPages.sass";

const BurgerPage = props => {
  return (
    <>
      <PageTitle title="Бургеры" />
      <Row className="catalogContainer">
        <RenderCatalog typeProduct={`burgers`} />
      </Row>
    </>
  );
};

export default BurgerPage;
