import React from "react";
import { CollectionItem } from "react-materialize";
import Btn from "../Btn/Btn";
import { ScrollTop } from "../ScrollTop/ScrollTop";

const CartPrice = props => {
  return (
    <CollectionItem>
      <div className="CartBtn">
        <Btn
          type="link"
          to="/sets"
          title="Продолжить покупки"
          size="medium"
          onClick={ScrollTop}
        />
      </div>
      <div className="CartBtn">
        <Btn
          type="link"
          to="/profile"
          title="Оформить заказ"
          size="medium"
          onClick={ScrollTop}
        />
      </div>
      <div className="CartSum">
        <span>Итого, к оплате</span>
        <span className="Sum"> {props.sum} р</span>
      </div>
    </CollectionItem>
  );
};

export default CartPrice;
