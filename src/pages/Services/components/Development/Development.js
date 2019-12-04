import React, {Component} from "react";
import BaseTabs from "../../../../commons/BaseTabs";
import Web from "../Web/Web";
import Mobile from "../Mobile/Mobile";
import IoT from "../IoT/IoT";
import Blockchain from "../Blockchain/Blockchain";
import Bubble from "../../../../commons/Bubble";

export class Development extends Component {
    tabs = [
        { id: 'web', title: 'Web', component: () => <Web/> },
        { id: 'mobile', title: 'Mobile', component: () => <Mobile/> },
        { id: 'iot', title: 'IoT', component: () => <IoT/> },
        { id: 'blockchain', title: 'Blockchain', component: () => <Blockchain/> }
    ];

    render() {
        return (
            <section className="services__development" id="development">
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
