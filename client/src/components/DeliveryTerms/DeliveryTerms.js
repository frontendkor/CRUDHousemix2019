import React from "react";
import { Col, Collection, CollectionItem } from "react-materialize";

import { Delivery } from "../Ic/Ic";

const DeliveryTerms = props => {
  return (
    <Col m={12} s={12}>
      <Collection className="DeliveryPageCollection">
        <CollectionItem>
          <div className="DeliveryPageIc">
            <Delivery />
          </div>
          <p className="DeliveryPageText">
            <span className="DeliveryPageTextTitle">Условия доставки</span>
            <br />
            <br />
            Доставка товаров службой{" "}
            <b>
              HOUSE
              <span>MIX</span>
            </b>{" "}
            осуществляется по г.Минску, согласно карте зон обслуживания в
            течении 90 минут от подтверждения заказа. Минимальная сумма заказа
            26 белорусских рублей.{" "}
            <span className="mark">
              Если сумма заказа составляет менее 26 белорусских рублей, доставка
              осуществляется на платной основе!{" "}
            </span>
            Стоимость доставки в этом случае составляет{" "}
            <nobr className="mark">7 белорусских рублей.</nobr>
          </p>
        </CollectionItem>
      </Collection>
    </Col>
  );
};

export default DeliveryTerms;
