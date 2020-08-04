import React, {Component, Fragment} from "react";
import Banner from "../../components/Home/components/Banner/Banner";
import Products from "../../components/Home/components/Products/Products";
import Services from "../../components/Home/components/Services/Services";
import WeAre from "../../components/Home/components/WeAre";
import Achievements from "../../components/Home/components/Achievements/Achievements";
import Testimonials from "../../components/Home/components/Testimonials/Testimonials";
import Industries from "../../components/Home/components/Industries/Industries";
import BaseTabs from "../../commons/BaseTabs";
import OurWorks from "../../components/Home/components/OurWorks/OurWorks";
import OurNews from "../../components/Home/components/News/News";

class Index extends Component {
    onChangePage = (path) => {
        this.setState({path});
    };

    tabs = [
        {
            img: 'iot',
            name: 'IoT',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium',
            component: () => <WeAre/>
        }
    ];

    render() {
        return (
            <Fragment>
                <main className='home'>
                    <Banner/>
                    <Services redirect={this.onChangePage}/>
                    {/*<Industries tabs={this.tabs} tab="marketplace" selected="0"/>*/}
                    <OurWorks/>
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
