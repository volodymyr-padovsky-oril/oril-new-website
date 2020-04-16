import React, {Component} from "react";
import PortfolioIntro from "../../../components/PortfolioIntro/PortfolioIntro";
import {parse} from "query-string";
import {scrollTo} from "../../../commons/utils/scroll";
import Header from "../../../commons/Header";
import Contacts from "../.././../components/Contacts/Contacts";
import Footer from "../../../commons/Footer";
import {project} from "../../../lib/our-projects";
import {withRouter} from "next/router";
import SEOMetaTags from "../../../components/SEOMetaTags";
import BaseTabs from "../../../commons/BaseTabs";
import PortfolioMarketplace from "../../../components/PortfolioMarketplace/PortfolioMarketplace";
import PortfolioLifestyleAndFitness
    from "../../../components/PortfolioLifestyleAndFitness/PortfolioLifestyleAndFitness";
import PortfolioIoT from "../../../components/PortfolioIoT/PortfolioIoT";
import PortfolioBlockchain from "../../../components/PortfolioBlockchain/PortfolioBlockchain";
import PortfolioOther from "../../../components/PortfolioOther/PortfolioOther";
import '../../../components/Portfolio/styles/_portfolio.scss';

class Marketplace extends Component {
    // componentDidMount() {
    //     const query = parse(window.location.hash);
    //     const string = Object.keys(query)[0];
    //     const arr = ['web', 'mobile', 'iot', 'blockchain', 'lifestyle-and-fitness'];
    //     const test = string && arr.some(el => string.includes(el));
    //
    //     string && test
    //         ? scrollTo('#products')
    //         : window.scrollTo(0, 0);
    // }
    //
    // static getInitialProps() {
    //     return {
    //         project: project
    //     }
    // }

    tabs = [
        { id: 'marketplace',  href: '/portfolio/marketplace', title: 'Marketplace', component: () => <PortfolioMarketplace/> },
        { id: 'lifestyle-and-fitness', href: '/portfolio/lifestyle', title: 'Lifestyle & Fitness', component: () => <PortfolioLifestyleAndFitness/> },
        { id: 'iot', title: 'IoT', href: '/portfolio/iot',  component: () => <PortfolioIoT/> },
        { id: 'blockchain', href: '/portfolio/blockchain', title: 'Blockchain', component: () => <PortfolioBlockchain/> },
        { id: 'other', href: '/portfolio/other', title: 'Other', component: () => <PortfolioOther/> }
    ];

    render() {
        return (
            <>
                <SEOMetaTags
                    title={"ORIL | Portfolio"}
                    url={"/portfolio"}
                    // description={}   add custom description for this page
                />
                <Header redirect={this.onChangePage}/>
                <section className="portfolio">
                    {/*<PortfolioIntro/>*/}
                    {/*<Projects slides={this.props.project}/>*/}
                    <section className="portfolio__projects" id="products">
                        <div className="container">
                            <BaseTabs tabs={this.tabs} tab="other" selected="4"/>
                        </div>
                    </section>
                </section>
                <Contacts/>
                <Footer/>
            </>
        );
    }
}

export default withRouter(Marketplace);
