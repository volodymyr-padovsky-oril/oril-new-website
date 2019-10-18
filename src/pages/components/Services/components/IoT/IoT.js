import React, {Component} from "react";
import Bubble from "../../../../../commons/Bubble";

export class IoT extends Component {
    services = [
        { img: 'services-logo-typescript-java', name: 'Java', link: 'https://www.java.com/en/' },
        { img: 'services-logo-typescript-node', name: 'Node JS', link: 'https://nodejs.org/en/' },
        { img: 'services-logo-typescript-react', name: 'React Native', link: 'https://facebook.github.io/react-native/' },
        { img: 'services-logo-typescript-angular', name: 'Angular', link: 'https://angular.io/' },
        { img: 'services-logo-typescript', name: 'TypeScript', link: 'https://www.typescriptlang.org/' }
    ];

    deliverables = [
        { title: 'Web/Mobile App', img: 'deliv-webmobile' },
        { title: 'Firmware', img: 'deliv-firmware' },
        { title: 'Admin Dashboard', img: 'deliv-dashboard' },
        { title: 'Documentation', img: 'deliv-documentation' },
        { title: 'Source code', img: 'deliv-sourcecode' }
    ];

    products = [
        { img: 'nuravine-logo', link: 'https://www.nuravine.com/'},
        { img: 'connected-copper', link: 'https://connectedcopper.com/'}
    ];

    render() {
        return (
            <section className="services__iot">
                <div className="container">
                    <Bubble size="1089px" top="1850px" left="-400px" speed=".2"/>
                    <h3 className="tab-title">IoT</h3>
                    <p className="pre-text">Breathe life into objects that surround you and make them Smart</p>
                    <p className="text">
                        “Of all the emerging technologies, the Internet of Things (IoT) is
                        projected to have the greatest impact on the industrial economy ”
                        <a href="http://info.forbes.com/rs/790-SNV-353/images/Hitachi+IoT+Report.pdf" className="link">(Forbes Insights report)</a>
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
                                        <img src={'assets/img/' + product.img + '.png'} alt={product.img} />
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

export default IoT;
