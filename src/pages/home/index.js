import React, {Component, Fragment} from "react";
import Banner from "../../components/Home/components/Banner/Banner";
import Services from "../../components/Home/components/Services/Services";
import WeAre from "../../components/Home/components/WeAre";
import Achievements from "../../components/Home/components/Achievements/Achievements";
import Testimonials from "../../components/Home/components/Testimonials/Testimonials";
import Industries from "../../components/Home/components/Industries/Industries";
import OurWorks from "../../components/Home/components/OurWorks/OurWorks";
import "../../commons/BaseTabs/index.scss";
import  "../../components/Home/components/OurWorks/_our-works.scss";
import OurNews from "../../components/Home/components/News/News";
import {project} from "../../lib/our-projects";
import '../../styles/index.scss';

class Index extends Component {
    onChangePage = (path) => {
        this.setState({path});
    };

    render() {
        return (
            <Fragment>
                <main className='home'>
                    <Banner/>
                    <Services/>
                    <Industries/>
                    <OurWorks h3="Our works" slides = {[project.laced, project.sab, project.vicki]}/>
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
