import React, {Component} from "react";
import Bubble from "../../../../commons/Bubble";

export class Blockchain extends Component {
    deliverables = [
        { title: 'Trading Bot', img: 'deliv-bot' },
        { title: 'Wallet', img: 'deliv-market' },
        { title: 'Smart Contracts', img: 'deliv-contract' },
        { title: 'Custom Blockchain Solutions', img: 'deliv-solution' },
        { title: 'Documentation', img: 'deliv-documentation' },
        { title: 'Source code', img: 'deliv-sourcecode' }
    ];

    services = [
        { img: 'services-logo-typescript-java', name: 'Java', link: 'https://www.java.com/en/' },
        { img: 'services-logo-typescript-node', name: 'Node JS', link: 'https://nodejs.org/en/' },
        { img: 'services-logo-ethereum', name: 'Ethereum', link: 'https://www.ethereum.org/' },
        { img: 'services-logo-binance', name: 'Binance', link: 'https://www.binance.com/en' }
    ];

    products = [
        { img: 'scroogebot-logo', link: 'https://scroogebot.co/'},
        { img: 'kings-logo', link: 'http://cryptokings.com/'},
    ];

    render() {
        return (
            <section className="services__blockchain">
                <div className="container">
                    <Bubble size="1089px" top="1850px" left="-400px" speed=".2"/>
                    <h3 className="tab-title">Blockchain</h3>
                    <p className="text">
                        Blockchain is not only an innovative technology but is also a revolutionary approach to how our daily transactions are processed and stored. Blockchain adoption grows each day due to its committed community that contributes to the infrastructure and tools that make Blockchain’s application a no-brainer in many industries
                    </p>
                    <div className="services__approach">
                        <h4>Our Approach</h4>
                        <div className="approach-text">
                            <div>Domain Research</div>
                            <div>Product planning</div>
                            <div>Implementation & Delivery</div>
                            <div>Maintenance & Support</div>
                        </div>
                        <img src="assets/icons/approach-group-web.svg" alt="group-web"/>
                        {/*<div className="see-more">*/}
                        {/*    <a href="/#">See more details</a>*/}
                        {/*</div>*/}
                    </div>
                    <div className="services__deliverables">
                        <Bubble size="735px" top="800px" left="920px" speed=".2"/>
                        <h4>Deliverables</h4>
                        <div>
                            {
                                this.deliverables.map((deliverable, index) => (
                                    <div key={'deliverable-' + index} className="link-block">
                                        <img src={'assets/icons/' + deliverable.img + '.svg'} alt={deliverable.img} />
                                        <span>{deliverable.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="services__technologies">
                        <Bubble size="407px" top="990px" left="-1800px" speed=".2"/>
                        <h4>Technologies</h4>
                        <div>
                            {
                                this.services.map((service, index) => (
                                    <a href={service.link} target="_blank" rel="noopener noreferrer" key={'technology-' + index}>
                                        <div>
                                            <img src={'assets/img/' + service.img + '.png'} alt={service.img} />
                                        </div>
                                        <span>{service.name}</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="services__products">
                        <h4>Featured Products</h4>
                        <div>
                            {
                                this.products.map((product, index) => (
                                    <a href={product.link} target="_blank" rel="noopener noreferrer" key={'product-' + index}>
                                        <img src={'assets/img/' + product.img + '.png'} alt={product.img} title={product.link}/>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blockchain;
