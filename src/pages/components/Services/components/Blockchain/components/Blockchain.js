import React, {Component} from "react";
import Bubble from "../../../../../../commons/Bubble";

export class Blockchain extends Component {
    deliverables = [
        { title: 'Trading Bot', img: 'deliv-bot' },
        { title: 'Wallet', img: 'deliv-market' },
        { title: 'Smart Contracts', img: 'deliv-contract' },
        { title: 'Custom Blockchain Solutions', img: 'deliv-solution' },
        { title: 'Documentation', img: 'deliv-documentation' },
        { title: 'Source code', img: 'deliv-sourcecode' }
    ];

    render() {
        return (
            <section className="services__blockchain">
                <div className="container">
                    <Bubble size="1089px" top="1850px" left="-400px" speed=".2"/>
                    <h3 className="tab-title">Blockchain</h3>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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
                        <div className="see-more">
                            <a href="/#">See more details</a>
                        </div>
                    </div>
                    <div className="services__deliverables">
                        <Bubble size="735px" top="800px" left="920px" speed=".2"/>
                        <h4>Deliverables</h4>
                        <div>
                            {
                                this.deliverables.map((deliverable, index) => (
                                    <a href="/#" key={'deliverable-' + index} className="link-block">
                                        <img src={'assets/icons/' + deliverable.img + '.svg'} alt={deliverable.img} />
                                        <span>{deliverable.title}</span>
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
