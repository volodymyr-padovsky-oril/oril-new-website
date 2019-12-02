import React, {Component, Fragment} from "react";
import Intro from "./Intro/Intro";
import Design from "./Design/Design";
import Development from "./Development/Development";
import {parse} from "query-string";
import {scrollTo} from "../../../commons/utils/scroll";
import {later} from "../../../commons/utils/main";
import Header from "../../../commons/Header";
import Contacts from "../../Contacts";

export class Services extends Component {
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

export default Services;
