import React, {Component} from "react";
import SEOMetaTags from "../../components/SEOMetaTags";
import Header from "../../commons/Header";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../commons/Footer";
import CaseStudy from "../../components/CaseStudy/CaseStudy";
import "../../components/CaseStudy/styles/_case-study.scss";
import {caseStudy} from "../../lib/case-study";


class Index extends Component {

    render() {
        return (
            <>
                <SEOMetaTags
                    title={"ORIL | Green Vision Case Study"}
                    url={"/portfolio"}
                    // description={}   add custom description for this page
                />
                <Header redirect={this.onChangePage}/>
                <CaseStudy data={caseStudy.greenVision}/>
                <Contacts/>
                <Footer/>
            </>
        );
    }
}

export default Index;
