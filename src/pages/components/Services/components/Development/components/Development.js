import React, {Component} from 'react';
import BaseTabs from '../../../../../../commons/BaseTabs';
import Databases from "../../Databases";
import Web from "../../Web";
import Mobile from "../../Mobile";
import HybridApp from "../../HybridApp";
import FrontEnd from "../../FrontEnd";
import BackEnd from "../../BackEnd";
import Bubble from "../../../../../../commons/Bubble";

export class Development extends Component {
    tabs = [
        { id: 'web', title: 'Web', component: () => <Web/> },
        { id: 'mobile', title: 'Mobile', component: () => <Mobile/> },
        { id: 'hybrid-app', title: 'Hybrid App', component: () => <HybridApp/> },
        { id: 'front-end', title: 'Front-End', component: () => <FrontEnd/> },
        { id: 'back-end', title: 'Back-End', component: () => <BackEnd/> },
        { id: 'databases', title: 'Databases', component: () => <Databases/> }
    ];

    render() {
        return (
            <section className="services__development" id="development" ref={this.props.section}>
                <div className="container">
                    <Bubble size="517px" top="1220px" left="-980px" speed=".4"/>
                    <Bubble size="267px" top="2020px" left="-1620px" speed=".8"/>
                    <h2><span>02</span>Product Development</h2>
                    <BaseTabs tabs={this.tabs} pathname="services" />
                </div>
            </section>
        );
    }
}

export default Development;
