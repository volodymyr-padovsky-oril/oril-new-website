import React, {Component, Fragment} from 'react';
import Intro from "./Intro";
import Design from "./Design";
import Development from "./Development";
import {parse} from 'query-string';
import {scrollTo} from "../../../../commons/utils/scroll";
import {later} from "../../../../commons/utils/main";

export class Services extends Component {
    constructor(props) {
        super(props);

        this.sectionDevelopment = React.createRef();
        this.sectionDesign = React.createRef();
    }

    componentDidMount() {
        const query = parse(window.location.search);

        if (query.activeTab) {
            scrollTo('#development');
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
            <Fragment>
                <section className="services">
                    <Intro/>
                    <Design section={this.sectionDesign} />
                    <Development section={this.sectionDevelopment} />
                </section>
            </Fragment>
        );
    }
}

export default Services;
