import React, { Component } from "react";
import { Slide } from "react-materialize";
import Logo from "../../Logo/Logo";

import Pizza from "../BanerImg/slide1/dyablo-4.png";
import Sushi from "../BanerImg/slide1/sushi-set-3.png";
import Burger from "../BanerImg/slide1/burger.png";

export class Slide1 extends Component{
    amper() {
        return <b className="amper">&</b>;
    }
    render(){
        const { amper } = this;
        return(
        <>
            <Slide>
                <div className="slide1Content">
                    <Logo br={true} classis="slide1Logo" />
                    <h5 className="slide1SubTitle">
                    <span>24 часа бесплатная доставка</span>
                    ПИЦЦА {amper()} СЕТЫ {amper()} БУРГЕРЫ {amper()} НАПИТКИ
                    </h5>
                </div>
                <div className="darken1" />
                <div className="slide1Img">
                    <img src={Pizza} alt="img" className="Pizza" />
                    <img src={Sushi} alt="img" className="Sushi" />
                    <img src={Burger} alt="img" className="Burger" />
                </div>
            </Slide>
        </>
        )
    }
}