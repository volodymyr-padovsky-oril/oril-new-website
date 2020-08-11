import React, {Component} from "react";

export class PortfolioIntro extends Component {
    render() {
        return (
            <section className="portfolio__intro">
                <div className="container">
                    <div className="portfolio__intro__text">
                        <h2>Our Portfolio</h2>
                        <p>See some of the most recent Products we built...</p>
                    </div>
                    <div className="portfolio__intro__image">
                        <img src="../assets/img/hero.png" alt="hero" />
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioIntro;
