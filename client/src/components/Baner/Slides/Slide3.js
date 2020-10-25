import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Slide, Caption } from "react-materialize";

import Pizza1 from "../BanerImg/slide1/dyablo-4.png";
import Pizza2 from "../BanerImg/slide3/australia.png";
import Pizza3 from "../BanerImg/slide3/bari.png";

export class Slide3 extends Component{
    render(){
        return(
        <>
            <Slide>
                <Caption placement="right">
                    <div className="slide3Content">
                    <h3 className="slide3Title">Пицца БЕСПЛАТНО!</h3>
                    <h5 className="light grey-text text-lighten-3 slide3Text">
                        Закажи 3 пиццы и получи одну из них БЕСПЛАТНО!
                    </h5>
                    <Link to="/bonuses" className="slide3Btn">
                        Подробно
                    </Link>
                    </div>
                </Caption>
                <div className="darken3" />
                <div className="slide3Img">
                    <img src={Pizza1} alt="img" className="Pizza1" />
                    <img src={Pizza2} alt="img" className="Pizza2" />
                    <img src={Pizza3} alt="img" className="Pizza3" />
                </div>
            </Slide>
        </>
        )
    }
}