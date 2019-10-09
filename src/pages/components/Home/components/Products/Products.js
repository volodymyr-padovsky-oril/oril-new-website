import React, {Component} from "react";
import Bubble from "../../../../../commons/Bubble";
import {NavLink} from "react-router-dom";

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
                <Bubble size="1300px" top="1000px" left="660px" speed="0.2"/>
                <Bubble size="320px" top="560px" left="-1300px" speed="0.8"/>
                <h3>Products We Build</h3>
                <div className="container">
                    {
                        this.products.map((product, index) => {
                            return (
                                <NavLink to={`/services?activeTab=${product.name}`} key={index} rel="noopener noreferrer" className="link-block">
                                    <img src={"assets/icons/products-" + product.name + ".svg"} alt={product.name}/>
                                    <span>{product.content}</span>
                                </NavLink>
                            )
                        })
                    }
                </div>
                <NavLink to="/portfolio">
                    <button className="btn">Featured Products</button>
                </NavLink>
            </section>
        );
    }
}

export default Products;
