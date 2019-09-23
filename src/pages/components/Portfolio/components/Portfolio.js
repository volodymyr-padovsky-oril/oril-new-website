import React, {Component} from "react";
import PortfolioIntro from "./PortfolioIntro/components/PortfolioIntro";
import Projects from "./Projects/components/Projects";
import {parse} from "query-string";
import {scrollTo} from "../../../../commons/utils/scroll";

export class Portfolio extends Component {
    componentDidMount() {
        const query = parse(window.location.search);

        query.activeTab
            ? scrollTo('#products')
            : window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className="portfolio">
                <PortfolioIntro />
                <Projects />
            </section>
        );
    }
}

export default Portfolio;
