import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";

export class Services extends Component {
    render() {
        return (
            <section className="home__services">
                <h2>Services</h2>
                <Bubble size="420px" top="1550px" left="-650px" speed="0.8"/>
                <div className="container">
                    <div className="home__services__flex-row">
                        <img src="assets/img/product-development.jpg" alt="product development"
                             srcSet="assets/img/product-development@2x.jpg 2x,
                                     assets/img/product-development@3x.jpg 3x"/>
                        <div>
                            <h3>
                                Product development
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate
                                diam eu pretium
                            </p>
                        </div>
                    </div>
                    <div className="home__services__flex-row">
                        <img src="assets/img/uxui.jpg" alt=""
                             srcSet="assets/img/uxui@2x.jpg 2x, assets/img/uxui@3x.jpg 3x"/>
                        <div>
                            <h3>UX/UI Design</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate
                                diam eu pretium
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
