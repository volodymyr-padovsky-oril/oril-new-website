import React, {Component} from "react";
import { ReactSVG } from 'react-svg'

export class Banner extends Component {
    render() {
        return (
            <section className="home__banner">
                <div className="container home__banner__block">
                    <div className="wrapper">
                        <div id="border_wrap">
                            <ReactSVG src="/assets/img/oril_banner.svg" />
                        </div>
                    </div>
                    <div className="home__banner__slogan">
                        <img src="/assets/img/oril_banner_title.svg" alt=""/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
