import React, {Component, Fragment} from "react";
import Banner from "../../components/Home/components/Banner/Banner";
import Products from "../../components/Home/components/Products/Products";
import Services from "../../components/Home/components/Services/Services";
import WeAre from "../../components/Home/components/WeAre";
import Achievements from "../../components/Home/components/Achievements/Achievements";
import Testimonials from "../../components/Home/components/Testimonials/Testimonials";

class Index extends Component {
    onChangePage = (path) => {
        this.setState({path});
    };

    render() {
        return (
            <Fragment>
                <main className='home'>
                    <Banner/>
                    <Products/>
                    <Services redirect={this.onChangePage}/>
                    <Testimonials/>
                    <Achievements/>
                    <WeAre/>
                </main>
            </Fragment>
        );
    }
}

export default Index;
