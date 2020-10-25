import React, { useState } from "react";
import PropTypes from "prop-types";
import mod from "./PizzaSizeBtn.module.sass";

export const PizzaSizeBtn = props => {
  const [active, SetActiv] = useState(+props.price[2]);
  const clickBtn = e => {
    SetActiv(+e.target.value);
    props.pizzaPrice(e);
  };
  const renderBtns = () => {
    const { id, price } = props;
    return price.map((item, index) => {
      const classis =
        active === item
          ? `${mod.SizePizzaBtn} ${mod.active}`
          : mod.SizePizzaBtn;
      return (
        <button
          key={`${id}${index}`}
          type="button"
          value={item}
          onClick={clickBtn}
          className={classis}
        >
          {index === 0 && `60см`}
          {index === 1 && `45см`}
          {index === 2 && `25см`}
        </button>
      );
    });
  };
  return <div className={mod.SizePizza}>{renderBtns()}</div>;
};

PizzaSizeBtn.propTypes = {
  pizzaPrice: PropTypes.func.isRequired,
  price: PropTypes.array.isRequired
};
