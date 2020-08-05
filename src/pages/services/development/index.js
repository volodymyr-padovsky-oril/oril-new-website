import React, {Component} from "react";
import BaseTabs from "../../../commons/BaseTabs";
import Web from "../../../components/Web/Web";
import Mobile from "../../../components/Mobile/Mobile";
import IoT from "../../../components/IoT/IoT";
import Blockchain from "../../../components/Blockchain/Blockchain";
import Bubble from "../../../commons/Bubble";
import SEOMetaTags from "../../../components/SEOMetaTags";
import Header from "../../../commons/Header";
import Contacts from "../../../components/Contacts/Contacts";
import Footer from "../../../commons/Footer";
import './_development.scss';

export class Development extends Component {
    tabs = [
        {id: 'web', title: 'Web', component: () => <Web/>},
        {id: 'mobile', title: 'Mobile', component: () => <Mobile/>},
        {id: 'iot', title: 'IoT', component: () => <IoT/>},
        {id: 'blockchain', title: 'Blockchain', component: () => <Blockchain/>}
    ];

    render() {
        return (
            <div className="design-wrapper">
                <SEOMetaTags
                    title={"ORIL | Services"}
                    url={"/services"}
                    // description={}   add custom description for this page
                />
                <Header redirect={this.onChangePage}/>
                <div className="services">
                    <section className="services__development" id="development">
                        <div className="container">
                            <Bubble size="517px" top="1220px" left="-980px" speed=".4"/>
                            <Bubble size="267px" top="2020px" left="-1620px" speed=".8"/>
                            <h2>Product Development</h2>
                            <BaseTabs tabs={this.tabs} selected="0"/>
                        </div>
                    </section>
                    <Contacts/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Development;
