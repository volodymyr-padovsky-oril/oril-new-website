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
            content: 'Intuitive design is a huge component of most products’ success. We’ll make sure your products and features flow well while looking great!'
        },
        {
            img: 'product-development',
            name: 'Product development',
            content: 'Unicorns aren’t built in a day. They’re the product of solid methodologies that iteratively bridge market demands with unique solutions. We’ve got your back.'
        },
        {
            img: 'io-t',
            name: 'Product IoT',
            content: 'Our dedicated team of IoT specialists ensures that software, hardware, and everything in between works just like it should!'
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
