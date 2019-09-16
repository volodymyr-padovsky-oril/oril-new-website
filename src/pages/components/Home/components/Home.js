import React, {Component, Fragment} from "react";
import Banner from "./Banner";
import Products from "./Products";
import Services from "./Services";
import WeAre from "./WeAre";

class Home extends Component {
    onChangePage = (path) => {
        this.setState({ path });
    };

    render() {
        return (
            <Fragment>
                <main className='home'>
                    <Banner/>
                    <Products/>
                    <Services redirect={this.onChangePage}/>
                    <WeAre/>
                </main>
            </Fragment>
        );
    }
}

export default Home;
