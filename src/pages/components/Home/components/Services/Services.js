import React, {Component} from "react";
import Bubble from "../../../../../commons/Bubble";
import {NavLink} from "react-router-dom";

export class Services extends Component {
    redirect = (e) => {
        const elem = e.target;
        this.props.redirect(elem.pathname);
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <section className="home__services">
                <Bubble size="420px" top="1550px" left="-650px" speed="0.8"/>
                <h3>Services</h3>
                <div className="container">
                    <NavLink to={{pathname: "/services", search: "?section=design"}} rel="noopener noreferrer" onClick={this.redirect.bind(this)}>
                        <div className="home__services__flex-row">
                            <img src="assets/img/uxui.jpg" alt="uxui" />
                            <div>
                                <div>
                                    <h4>UI/UX Design</h4>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate
                                    diam eu pretium
                                </p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to={{pathname: "/services", search: "?section=development"}} rel="noopener noreferrer" onClick={this.redirect.bind(this)}>
                        <div className="home__services__flex-row">
                            <img src="assets/img/product-development.jpg" alt="product development" />
                            <div>
                                <div>
                                    <h4>Product development</h4>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate
                                    diam eu pretium
                                </p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </section>
        );
    }
}

export default Services;
