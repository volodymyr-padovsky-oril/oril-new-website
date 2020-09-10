import React, {Component} from "react";
import Header from "../../../commons/Header";
import Contacts from "../.././../components/Contacts/Contacts";
import Footer from "../../../commons/Footer";
import {withRouter} from "next/router";
import SEOMetaTags from "../../../components/SEOMetaTags";
import BaseTabs from "../../../commons/BaseTabs";
import '../../../components/Portfolio/styles/_portfolio.scss';
import {tabs} from "../../../lib/tabs";

class RealEstate extends Component {
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
                    <section className="portfolio__projects">
                        <div className="container">
                            <BaseTabs tabs={tabs} tab="real-estate" selected="0"/>
                        </div>
                    </section>
                </section>
                <Contacts/>
                <Footer/>
            </>
        );
    }
}

export default withRouter(RealEstate);