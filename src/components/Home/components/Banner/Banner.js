import React, {Component} from "react";
import Header from "../../../../commons/Header";
import dynamic from "next/dynamic";
const ProgressiveImage = dynamic(
  () => import("../../../ImageLoader"),
  { ssr: false }
);


export class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <Header main={true}/>
                <div className="banner__block">
                    <h1>One stop shop for <br/> your digital product</h1>
                    <ProgressiveImage
                        preview="../assets/img/top-wave__lazy.png"
                        src="../assets/img/top-wave.png"
                        render={(src, style) => <img src={src} className="banner-img--desktop" />}
                    />
                    <img className="banner-img--mobile"  src="../assets/img/top-wave-mobile.png" alt="top-wave"/>
                </div>
            </section>
        );
    }
}

export default Banner;
