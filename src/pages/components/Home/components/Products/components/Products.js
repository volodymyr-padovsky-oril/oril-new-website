import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";

export class Products extends Component {
    products = [{
        name: 'web',
        content: 'Web'
    }, {
        name: 'mobile',
        content: 'Mobile'
    }, {
        name: 'iot',
        content: 'IoT'
    }, {
        name: 'blockchain',
        content: 'Blockchain'
    }];

    render() {
        return (
            <section className="home__products">
                <h2>Products We Build</h2>
                <Bubble size="1300px" top="1000px" left="660px" speed="0.2"/>
                <Bubble size="320px" top="560px" left="-1300px" speed="0.8"/>
                <div className="container">
                    {
                        this.products.map((product, index) => {
                            return (
                                <a href={`/services?activeTab=${product.name}`} key={index} target="_blank" rel="noopener noreferrer">
                                    <img src={"assets/icons/products-" + product.name + ".svg"}
                                         alt={product.name}/>
                                    <span>{product.content}</span>
                                </a>
                            )
                        })
                    }
                </div>
                <button className="btn">Featured Products</button>
            </section>
        );
    }
}

export default Products;
