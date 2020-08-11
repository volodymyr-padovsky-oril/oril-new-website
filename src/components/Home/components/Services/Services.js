import React, {Component} from "react";

export class Services extends Component {
    redirect = (e) => {
        const elem = e.target;
        this.props.redirect(elem.pathname);
        window.scrollTo(0, 0)
    };

    products = [
        {
            img: 'ui-ux-design',
            name: 'UX/UI Design',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium'
        },
        {
            img: 'product-development',
            name: 'Product development',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium'
        },
        {
            img: 'io-t',
            name: 'Product IoT',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium'
        },
    ];

    render() {
        return (
            <section className="home__services">
                <div className="container">
                    <h3>Services</h3>
                    <div className="home__services__wrapper">
                        {this.products.map((product, index) => {
                            return (
                                <div className="home__services__item">
                                    <img
                                        src={`../assets/img/${product.img}.png`}
                                        alt=""/>
                                    <h4>{product.name}</h4>
                                    <p>{product.content}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
