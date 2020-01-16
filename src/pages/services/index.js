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
import Head from "next/dist/next-server/lib/head";

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
                <Head>
                    <title>ORIL | Services</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta property="og:url" content="https://oril.co"/>
                    <meta property="og:title" content="ORIL | Services"/>
                    <meta property="og:type" content="website" />
                    <meta property="og:description"
                          content="ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting."/>
                    <meta property="og:image" content="https://oril.co/assets/img/link-logo.png"/>
                </Head>
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
