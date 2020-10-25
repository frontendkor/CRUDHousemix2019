import React from "react";

import { Row, Col } from "react-materialize";

import Baner from "../../components/Baner/Baner";
import { DeliveryTime, WorkingHours, Payment } from "../../components/Ic/Ic";

import "./BanerPage.sass";

const BanerPage = props => {
  return (
    <>
      <Baner />
      <section className="BanerPageContent">
        <p className="BanerPageTitle">
          Наша команда лучшая<nobr> в своём деле!</nobr>
        </p>
        <p className="BanerPageText">
          Мы рады предложить вам лучший сервис по доставке и{" "}
          <nobr>самую вкусную еду</nobr>
        </p>
        <div className="Facts">
          <Row>
            <Col xl={4} l={4} m={12} s={12}>
              <div className="FactsIc">
                <WorkingHours />
              </div>
              <p>Круглосуточная работа без перерывов</p>
            </Col>
            <Col xl={4} l={4} m={12} s={12}>
              <div className="FactsIc">
                <DeliveryTime />
              </div>
              <p>Доставка за 90 минут или вкусняшки за пол цены</p>
            </Col>
            <Col xl={4} l={4} m={12} s={12}>
              <div className="FactsIc">
                <Payment />
              </div>
              <p>Удобная оплата наличными или картой</p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default BanerPage;
