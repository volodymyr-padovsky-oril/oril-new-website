import React, {Component} from "react";
import Bubble from "../../../../commons/Bubble";

export class PortfolioIntro extends Component {
    render() {
        return (
            <section className="portfolio__intro">
                <div className="container">
                    <div className="portfolio__intro__text">
                        <Bubble size="481px" top="270px" left="-450px" speed="0.5"/>
                        <h2>Our Portfolio</h2>
                        <p>See some of the most recent Products we built...</p>
                    </div>
                    <div className="portfolio__intro__image">
                        <Bubble size="388px" top="390px" left="-370px" speed="0.7"/>
                        <Bubble size="500px" top="340px" left="10px" speed="0.3"/>
                        <img src="assets/img/hero.png" alt="hero" />
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioIntro;
