import React, {Component} from "react";
import Bubble from "../../../../../commons/Bubble";
import { ReactComponent as Logo } from './oril_banner.svg';
import { ReactComponent as Title } from './oril_banner_title.svg';

export class Banner extends Component {
    render() {
        return (
            <section className="home__banner">
                <div className="container home__banner__block">
                    <div className="wrapper">
                        {/*<Bubble size="351px" top="115px" left="200px" right="-255px" speed="0.8"/>*/}
                        {/*<Bubble size="470px" top="55px" left="-270px" speed="0.3"/>*/}
                        <div id="border_wrap">
                            <Logo/>

                        </div>
                    </div>
                    <div className="home__banner__slogan">
                        <Title/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
