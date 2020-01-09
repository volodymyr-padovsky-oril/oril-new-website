import React, {Component} from "react";
import PortfolioIntro from "../../components/PortfolioIntro/PortfolioIntro";
import Projects from "../../components/Projects/Projects";
import {parse} from "query-string";
import {scrollTo} from "../../commons/utils/scroll";
import Header from "../../commons/Header";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../commons/Footer";
import {project} from "../../lib/our-projects";
import {withRouter} from "next/router";
import Helmet from "react-helmet";

class Portfolio extends Component {
    componentDidMount() {
        const query = parse(window.location.search);

        query.activeTab
            ? scrollTo('#products')
            : window.scrollTo(0, 0);
    }

    static getInitialProps() {
        return {
            project: project
        }
    }

    render() {
        return (
            <>
                <Helmet
                    title="Portfolio | ORIL"
                    meta={[{ property: 'og:title', content: 'Portfolio' }]}
                />
                <Header redirect={this.onChangePage}/>
                <section className="portfolio">
                    <PortfolioIntro/>
                    <Projects slides={this.props.project}/>
                </section>
                <Contacts/>
                <Footer/>
            </>
        );
    }
}

export default withRouter(Portfolio);
