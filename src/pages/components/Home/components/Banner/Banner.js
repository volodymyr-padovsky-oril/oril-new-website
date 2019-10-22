import React, {Component} from "react";
import Bubble from "../../../../../commons/Bubble";

export class Banner extends Component {
    render() {
        return (
            <section className="home__banner">
                <div className="container home__banner__block">
                    <div className="wrapper">
                        {/*<Bubble size="351px" top="115px" left="200px" right="-255px" speed="0.8"/>*/}
                        {/*<Bubble size="470px" top="55px" left="-270px" speed="0.3"/>*/}
                        {/*<img src="assets/img/hero-elephant-notebook.png" alt="elephant" />*/}

                        <div id="border_wrap">
                            <video
                                webkit-playsInline
                                playsInline
                                autoPlay
                                muted
                                width="100%"
                            >
                                <source
                                    src="assets/video/oril-banner.mp4"
                                    type="video/mp4"
                                />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>

                    </div>
                    <div className="home__banner__slogan">
                        <h2>One stop shop for your digital product</h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
