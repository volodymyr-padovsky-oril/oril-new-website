import React, {Component} from "react";
import Intro from "../../components/Intro/Intro";
import Design from "../../components/Design/Design";
import Development from "../../components/Development/Development";
import {parse} from "query-string";
import {scrollTo} from "../../commons/utils/scroll";
import {later} from "../../commons/utils/main";
import Header from "../../commons/Header";
import Contacts from "../contacts";
import {withRouter} from "next/router";

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
                <Header redirect={this.onChangePage}/>
                <section className="services">
                    <Intro/>
                    <Design/>
                    <Development/>
                </section>
                <Contacts/>
            </>
        );
    }
}

export default withRouter(Services);
