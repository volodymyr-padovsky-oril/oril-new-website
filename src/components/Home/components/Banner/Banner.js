import React, {Component} from "react";
import Header from "../../../../commons/Header";
import Delayed from "../../../../commons/utils/Delayed";

export class Banner extends Component {
    render() {
        return (
            /*<div className="banner-wrapper">*/
            <section className="banner">
                <Header main={true}/>
                <div className="banner__block">
                    {/*<img className="banner-img--desktop" src="../assets/img/top-wave__plug.png" alt="top-wave__plug"/>*/}
                    {/*<img className="banner-img--desktop__lazy" src="../assets/img/top-wave__lazy.png" alt="top-wave"/>*/}
                    <img className="banner-img--desktop__lazy" src="../assets/img/top-wave.png" alt="top-wave"/>
                    {/*<img className="banner-img--mobile" src="../assets/img/top-wave-mobile.png" alt="top-wave"/>*/}
                    <Delayed waitBeforeShow={500}>
                        <h1>One stop shop for <br/> your digital product</h1>
                    </Delayed>
                </div>
            </section>
            // </div>
        );
    }
}

export default Banner;
