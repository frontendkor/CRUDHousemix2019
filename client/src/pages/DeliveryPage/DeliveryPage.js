import React from "react";

import { Row, Col, Collection, CollectionItem } from "react-materialize";

import PageTitle from "../../components/PageTitle/PageTitle";

import { WorkingHours, Payment } from "../../components/Ic/Ic";

import "./DeliveryPage.sass";

const DeliveryPage = props => {
  return (
    <Row className="DeliveryPageRow">
      <PageTitle title="Доставка и оплата" />
      <Col m={12} s={12}>
        <Collection className="DeliveryPageCollection">
          <CollectionItem>
            <div className="DeliveryPageIc">
              <Payment />
            </div>
            <p className="DeliveryPageText">
              <span className="DeliveryPageTextTitle">Условия оплаты</span>
              <br />
              Оплата заказа может осуществляться: <br />
              <span>Наличными (только в белорусских рублях).</span>
              <br />
              <span>
                Пластиковой банковской картой Visa, VisaElectron, MasterCard,
                MasterCardElectronic, MasterCard Maestro и Белкарт через
                терминал, находящийся у курьера.
              </span>
            </p>
          </CollectionItem>
          <CollectionItem>
            <div className="DeliveryPageIc">
              <WorkingHours />
            </div>
            <p className="DeliveryPageText">
              <span className="DeliveryPageTextTitle">Время работы</span>
              <br />
              Приём заказов и доставка товаров службой{" "}
              <b>
                HOUSE
                <span>MIX</span>
              </b>{" "}
              осуществляется 24 часа в сутки .
            </p>
          </CollectionItem>
        </Collection>
      </Col>
    </Row>
  );
};

export default DeliveryPage;
