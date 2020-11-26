import React, {Component} from "react";
import Delayed from "../../../../commons/utils/Delayed";

export class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <div className="banner__block">
                    <video className="banner-img--desktop" loop autoPlay muted playInline>
                        <source src="../assets/video/main-banner.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <video className="banner-img--mobile" muted="" loop autoplay="" kind="captions" preload="auto"
                           playsinline="">
                        autoPlay="" kind="captions" preload="auto" playsinline="">
                        <source src="../assets/video/main-banner.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="header-wrapper">
                        <Delayed waitBeforeShow={500}>
                            <h1>One stop shop <br/> for your <br/> digital product</h1>
                        </Delayed>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
