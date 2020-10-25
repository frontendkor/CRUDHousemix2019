import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Slide, Caption } from "react-materialize";

import Set2 from "../BanerImg/slide2/set2.png";
import Sprite from "../BanerImg/slide2/sprite.png";

export class Slide2 extends Component{
    render(){
        return(
        <>
            <Slide>
                <Caption placement="left">
                    <div className="slide2Content">
                    <h3 className="slide2Title">ПОДАРКИ !</h3>
                    <h5 className="light grey-text text-lighten-3 slide2Text">
                        Сделай заказ на суммму более 50р. и получи{" "}
                        <nobr>Сет №2 в подарок!</nobr>
                    </h5>
                    <h5 className="light grey-text text-lighten-3 slide2Text">
                        Сделай заказ на суммму более 40р. и получи{" "}
                        <nobr>Спрайт 1.5л в подарок !</nobr>
                    </h5>
                    <Link to="/bonuses" className="slide2Btn">
                        Подробно
                    </Link>
                    </div>
                </Caption>
                <div className="darken2" />
                <div className="slide2Img">
                    <img src={Set2} alt="img" className="Set2" />
                    <img src={Sprite} alt="img" className="Sprite" />
                </div>
            </Slide>
        </>
        )
    }
}
