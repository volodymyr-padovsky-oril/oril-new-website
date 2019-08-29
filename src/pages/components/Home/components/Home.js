import React, {Component, Fragment} from "react";
import Banner from "./Banner/components/Banner";
import Products from "./Products/components/Products";
import Services from "./Services/components/Services";
import WeAre from "./WeAre/components/WeAre";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <main className='home'>
                    <Banner/>
                    <Products/>
                    <Services/>
                    <WeAre/>
                </main>
            </Fragment>
        );
    }
}

export default Home;
