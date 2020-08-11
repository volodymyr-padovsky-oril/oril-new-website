import React, {Component} from "react";
import BaseTabs from "../../../../commons/BaseTabs";
import Web from "../../../../components/Web/Web";
import Mobile from "../../../../components/Mobile/Mobile";
import IoT from "../../../../components/IoT/IoT";
import Blockchain from "../../../../components/Blockchain/Blockchain";
import SEOMetaTags from "../../../../components/SEOMetaTags";
import Header from "../../../../commons/Header";
import Contacts from "../../../../components/Contacts/Contacts";
import Footer from "../../../../commons/Footer";
import '../_development.scss';

export class MobilePage extends Component {
    tabs = [
        {id: 'web', title: 'Web', href: '/services/development/web', component: () => <Web/>},
        {id: 'mobile', title: 'Mobile', href: '/services/development/mobile', component: () => <Mobile/>},
        {id: 'iot', title: 'IoT', href: '/services/development/iot', component: () => <IoT/>},
        {id: 'blockchain', href: '/services/development/blockchain', title: 'Blockchain', component: () => <Blockchain/>}
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
                            <h2>Product Development</h2>
                            <BaseTabs tabs={this.tabs} tab='mobile' selected="1"/>
                        </div>
                    </section>
                    <Contacts/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default MobilePage;
