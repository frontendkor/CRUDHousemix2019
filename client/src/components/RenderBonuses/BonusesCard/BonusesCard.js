import React from "react";
import { CollectionItem } from "react-materialize";
import "../RenderBonuses.sass";

const BonusesCard = props => {
  const { id, title, text, date } = props;
  return (
    <CollectionItem>
      <div className="bonusesImg">
        <img src={`data/bonuses/img/${id}.png`} alt="img" />
      </div>
      <div className="bonusesText">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
      <div className="bonusesDate">
        <h6>Актуально:</h6>
        <p>{date}</p>
      </div>
    </CollectionItem>
  );
};

export default BonusesCard;
