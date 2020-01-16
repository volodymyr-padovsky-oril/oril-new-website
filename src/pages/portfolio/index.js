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
import Head from "next/head";

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
                <Head>
                    <title>ORIL | Portfolio</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta property="og:url" content="https://oril.co"/>
                    <meta property="og:title" content="ORIL | Portfolio"/>
                    <meta property="og:type" content="website" />
                    <meta property="og:description"
                          content="ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting."/>
                    <meta property="og:image" content="https://oril.co/assets/img/link-logo.png"/>
                </Head>
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
