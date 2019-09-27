import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";
import {NavLink} from "react-router-dom";
import {scrollTo} from '../../../../../../commons/utils/scroll';

export class Intro extends Component {
    render() {
        return (
            <section className="services__intro">
                <div className="container">
                    <div className="services__intro__text">
                        <Bubble size="1030px" top="560px" left="-960px" speed=".5"/>
                        <Bubble size="266px" top="220px" left="100px" speed=".7"/>
                        <h2>Introductory text <br/> to services section</h2>
                        <p>This an introduction text. It has a fixed size, custom line</p>
                    </div>
                    <div className="services__intro__categories">
                        <Bubble size="315px" top="500px" left="350px" speed=".3"/>
                        <Bubble size="315px" top="500px" left="-760px" speed=".3"/>
                        <NavLink to={{pathname: "/services", search: "?section=design"}} onClick={() => scrollTo('#design')}>
                            <div className="services__intro__categories__design">
                                <img src="assets/img/uxui.svg" alt="product development" />
                                <span>UX/UI Design</span>
                            </div>
                        </NavLink>
                        <NavLink to={{pathname: "/services", search: "?section=development"}} onClick={() => scrollTo('#development')}>
                            <div className="services__intro__categories__development">
                                <img src="assets/img/pd.svg" alt="product development" />
                                <span>Product Development</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;