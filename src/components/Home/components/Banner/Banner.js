import React, {Component} from "react";
import Header from "../../../../commons/Header";

export class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <Header main={true}/>
                <div className="banner__block">
                    <h1>One stop shop for <br/> your digital product</h1>
                    <img src="../assets/img/top-wave.png" alt="top-wave"/>
                </div>
            </section>
        );
    }
}

export default Banner;
