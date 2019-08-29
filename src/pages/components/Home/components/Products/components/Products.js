import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";


export class Products extends Component {
    products = [{
        iconName: 'web',
        content: 'Web'
    }, {
        iconName: 'mobile',
        content: 'Mobile'
    }, {
        iconName: 'io-t',
        content: 'IoT'
    }, {
        iconName: 'blockchain',
        content: 'Blockchain'
    }];

    render() {
        return (
            <section className="home__products">
                <h2>Products We Build</h2>
                <Bubble size="1300px" top="1000px" left="660px" speed="0.2"/>
                <Bubble size="320px" top="560px" left="-1300px" speed="0.8"/>
                <div className="container">{
                    this.products.map((product, index) => {
                        return (
                            <a href="/" key={index}>
                                <img src={"assets/icons/products-" + product.iconName + ".svg"}
                                     alt={product.iconName}/>
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
