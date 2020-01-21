import React, {Component} from "react";
import Bubble from "../../../../commons/Bubble";
import Link from 'next/link';

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
                    <Link href={{pathname: "/services", hash: "ui-design"}} >
                        <a rel="noopener noreferrer" onClick={this.redirect.bind(this)}>
                            <div className="home__services__flex-row">
                                <img src="assets/img/uxui.jpg" alt="uxui" />
                                <div>
                                    <div>
                                        <h4>UI/UX Design</h4>
                                    </div>
                                    <p>
                                        Creative designs that make your innovation simple to use
                                    </p>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href={{pathname: "/services", hash: "development"}} >
                        <a rel="noopener noreferrer" onClick={this.redirect.bind(this)}>
                            <div className="home__services__flex-row">
                                <img src="assets/img/product-development.jpg" alt="product development" />
                                <div>
                                    <div>
                                        <h4>Product Development</h4>
                                    </div>
                                    <p>
                                        Scalable state-of-the-art products
                                    </p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </section>
        );
    }
}

export default Services;
