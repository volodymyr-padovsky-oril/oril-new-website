import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";

export class Banner extends Component {
    render() {
        return (
            <section className="home__banner">
                <div className="container home__banner__block">
                    <div className="wrapper">
                        <Bubble size="351px" top="115px" left="200px" right="-255px" speed="0.8"/>
                        <Bubble size="470px" top="55px" left="-270px" speed="0.3"/>
                        <img src="assets/img/hero-elefant-notebook-3.png" alt="elefant"
                             srcSet="assets/img/hero-elefant-notebook-3@2x.png 2x,
                                     assets/img/hero-elefant-notebook-3@3x.png 3x"/>
                    </div>
                    <div className="home__banner__slogan">
                        <h1>ORIL</h1>
                        <p>One stop shop <br/>
                            for your digital product</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
