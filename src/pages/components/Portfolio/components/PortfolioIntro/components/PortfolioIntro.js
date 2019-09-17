import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";

export class PortfolioIntro extends Component {
    render() {
        return (
            <section className="portfolio__intro">
                <div className="container">
                    <div className="portfolio__intro__text">
                        <Bubble size="481px" top="270px" left="-450px" speed="0.5"/>
                        <h2>Introductory text <br/> to portfolio section</h2>
                        <p>This an introduction text. It has a fixed size, custom line height</p>
                    </div>
                    <div className="portfolio__intro__image">
                        <Bubble size="388px" top="390px" left="-370px" speed="0.7"/>
                        <Bubble size="500px" top="340px" left="10px" speed="0.3"/>
                        <img src="assets/img/hero.png" alt="hero"
                             srcSet="assets/img/hero@2x.png 2x, assets/img/hero@3x.png 3x"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioIntro;
