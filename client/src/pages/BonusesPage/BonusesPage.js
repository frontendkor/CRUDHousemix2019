import React from "react";

import { Row } from "react-materialize";

import PageTitle from "../../components/PageTitle/PageTitle";
import RenderBonuses from "../../components/RenderBonuses/RenderBonuses";

const BonusesPage = props => {
  return (
    <Row>
      <PageTitle title="АКЦИИ !" />
      <RenderBonuses />
    </Row>
  );
};

export default BonusesPage;
