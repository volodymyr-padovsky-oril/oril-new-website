import React, {Component} from "react";

export class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <div className="banner__block">
                    <h1>One stop shop for <br/> your digital product</h1>
                    <img src="../assets/img/top-wave.png" alt="top-wave"/>
                </div>
                {/*<div className="container">*/}
                {/*    <div className="banner__text">*/}
                {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ea*/}
                {/*            earum fugiat neque odio porro praesentium quod repellendus sapiente! Ad amet aspernatur*/}
                {/*            assumenda*/}
                {/*            labore mollitia quis quod reiciendis sequi voluptas!*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        );
    }
}

export default Banner;
