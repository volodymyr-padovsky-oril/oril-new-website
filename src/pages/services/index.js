import React, {Component} from "react";
import Intro from "../../components/Intro/Intro";
import Design from "../../components/Design/Design";
import Development from "../../components/Development/Development";
import {parse} from "query-string";
import {scrollTo} from "../../commons/utils/scroll";
import {later} from "../../commons/utils/main";
import Header from "../../commons/Header";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../commons/Footer";
import {withRouter} from "next/router";
import Helmet from "react-helmet";

class Services extends Component {
    componentDidMount() {
        const query = parse(window.location.search);

        if (query.activeTab) {
            later().then(() => scrollTo('#development'));
        }

        switch (query.section) {
            case 'design':
                later().then(() => scrollTo('#design'));
                break;
            case 'development':
                later().then(() => scrollTo('#development'));
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <>
                <Helmet
                    title="Services | ORIL"
                    meta={[{ property: 'og:title', content: 'Services' }]}
                />
                <Header redirect={this.onChangePage}/>
                <section className="services">
                    <Intro/>
                    <Design/>
                    <Development/>
                </section>
                <Contacts/>
                <Footer/>
            </>
        );
    }
}

export default withRouter(Services);
