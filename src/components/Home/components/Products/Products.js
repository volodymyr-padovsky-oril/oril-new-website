import React, {Component} from "react";
import Link from 'next/link';

export class Products extends Component {
    products = [
        { name: 'web', content: 'Web' },
        { name: 'mobile', content: 'Mobile'},
        { name: 'iot', content: 'IoT'},
        { name: 'blockchain', content: 'Blockchain'}
    ];

    render() {
        return (
            <section className="home__products">
                <h3>Products We Build</h3>
                <div className="container">
                    {
                        this.products.map((product, index) => {
                            return (
                                <Link href={`/services/development/${product.name}`} key={index}>
                                    <a
                                        rel="noopener noreferrer"
                                        className="link-block">
                                        <img src={"assets/icons/products-" + product.name + ".svg"} alt={product.name}/>
                                        <span>{product.content}</span>
                                    </a>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="button-wrapper">
                    <Link href="/portfolio">
                        <button className="btn">Featured Products</button>
                    </Link>
                </div>

            </section>
        );
    }
}

export default Products;
