import React, {Component, Fragment} from "react";
import Banner from "../../components/Home/components/Banner/Banner";
import Services from "../../components/Home/components/Services/Services";
import WeAre from "../../components/Home/components/WeAre";
import Achievements from "../../components/Home/components/Achievements/Achievements";
import Testimonials from "../../components/Home/components/Testimonials/Testimonials";
import Industries from "../../components/Home/components/Industries/Industries";
import OurWorks from "../../components/Home/components/OurWorks/OurWorks";
import  "../../components/Home/components/OurWorks/_our-works.scss";
import OurNews from "../../components/Home/components/News/News";
import Web from "../../components/Web/Web";
import Mobile from "../../components/Mobile/Mobile";
import IoT from "../../components/IoT/IoT";
import Blockchain from "../../components/Blockchain/Blockchain";
import {project} from "../../lib/our-projects";

class Index extends Component {
    onChangePage = (path) => {
        this.setState({path});
    };

    // tabs = [
    //     {
    //         id: 'iot',
    //         img: 'iot',
    //         name: 'IoT',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium',
    //         component: () => <div>helo</div>
    //     },
    //     {
    //         id: 'real-estate',
    //         img: 'iot',
    //         name: 'Real Estate',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium',
    //         component: () => <div>hi</div>
    //     }
    // ];

    tabs = [
        {id: 'web', title: 'Web', component: () => <Web/>},
        {id: 'mobile', title: 'Mobile', component: () => <Mobile/>},
        {id: 'iot', title: 'IoT', component: () => <IoT/>},
        {id: 'blockchain', title: 'Blockchain', component: () => <Blockchain/>}
    ];

    render() {
        return (
            <Fragment>
                <main className='home'>
                    <Banner/>
                    <Services redirect={this.onChangePage}/>
                    <Industries tabs={this.tabs} selected="0" tab="web"/>
                    <OurWorks h3="Our works" slides = {[project.laced, project.sparkOffer, project.sab]}/>
                    {/*<Products/>*/}
                    <Testimonials/>
                    <Achievements/>
                    <WeAre/>
                    <OurNews/>
                </main>
            </Fragment>
        );
    }
}

export default Index;
