import React, {Component, Fragment} from 'react';

import './index.scss';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <main className='main' id='home'>
                    <section>
                        <div className='container banner'>
                            <div className='bubble_wrapper'>
                                <div className="bubble_one"></div>
                                <div className="bubble_two"></div>
                                <img src="assets/img/hero-elefant-notebook-3@3x.png" alt="elefant"/>
                            </div>
                            <div className="banner_slogan">
                                <h1>ORIL</h1>
                                <p>One stop shop <br/>
                                    for your digital product</p>
                            </div>
                        </div>
                    </section>
                    <section>
                      <h2>Products We Build</h2>
                        <div className='bubble_wrapper'>
                        </div>
                        <div className='container products'>
                            <a href="/">
                                <img src="assets/icons/products-web.svg" alt="web"/>
                                Web
                            </a>
                            <a href="/">
                                <img src="assets/icons/products-mobile.svg" alt="mobile"/>
                                Mobile
                            </a>
                            <a href="/">
                                <img src="assets/icons/products-io-t.svg" alt="IoT"/>
                                IoT
                            </a>
                            <a href="/">
                                <img src="assets/icons/products-blockchain.svg" alt="mobile"/>
                                Blockchain
                            </a>
                        </div>
                        <button className='btn'>Featured Products</button>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default Home
