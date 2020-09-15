import React, {Component} from "react";
import {ReactSVG} from 'react-svg'

export class Banner extends Component {
    render() {
        return (
            <section className="banner">

                <div className="banner__block">
                    {/*<div className="wrapper">*/}
                    {/*    <div id="border_wrap">*/}
                    {/*        <ReactSVG src="/assets/img/oril_banner.svg" />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="home__banner__slogan">*/}
                    {/*    <img src="/assets/img/oril_banner_title.svg" alt=""/>*/}
                    {/*</div>*/}
                </div>
                <div className="container">

                <div className="banner__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ea
                        earum fugiat neque odio porro praesentium quod repellendus sapiente! Ad amet aspernatur
                        assumenda
                        labore mollitia quis quod reiciendis sequi voluptas!
                    </p>
                </div>
                </div>
            </section>
        );
    }
}

export default Banner;
