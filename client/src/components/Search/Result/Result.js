import React from "react";
import PropTypes from "prop-types";
import RenderCard from "../../RenderCatalog/RenderCard/RenderCard";
import "./Result.sass";

const Result = props => {
  const { data, addProduct, cartData } = props;
  const RenderResult = (data, typeProduct) => {
    let dataFilter = data.filter(item => item.typeProduct === typeProduct);
    let title = dataFilter.length ? <h2 className="ResultTitle">Title</h2> : "";
    return (
      <>
        {title}
        {dataFilter.map(item => (
          <RenderCard
            key={item.id}
            data={item}
            typeProduct={item.typeProduct}
            addProduct={addProduct}
            cartData={cartData}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="resultContainer">{RenderResult(data, `pizza`)}</div>
      <div className="resultContainer">{RenderResult(data, `sets`)}</div>
      <div className="resultContainer">{RenderResult(data, `burgers`)}</div>
      <div className="resultContainer">{RenderResult(data, `drinks`)}</div>
    </>
  );
};

Result.propTypes = {
  data: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
  cartData: PropTypes.object.isRequired
};

export default Result;
