import React, {Component} from "react";
import PortfolioIntro from "./PortfolioIntro/PortfolioIntro";
import Projects from "./Projects/Projects";
import {parse} from "query-string";
import {scrollTo} from "../../../commons/utils/scroll";
import Header from "../../../commons/Header";
import Contacts from "../../Contacts";

export class Portfolio extends Component {
    componentDidMount() {
        const query = parse(window.location.search);

        query.activeTab
            ? scrollTo('#products')
            : window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header redirect={this.onChangePage}/>
                <section className="portfolio">
                    <PortfolioIntro/>
                    <Projects/>
                </section>
                <Contacts/>
            </>
        );
    }
}

export default Portfolio;
