import React, {Component} from "react";
import Bubble from "../../../../../commons/Bubble";

export class Web extends Component {
    blocks = [
        {
            text: `
                A single Web Application is available on all types of platforms (Mobile, Web, iOS, Windows, Linux),
                and provides a smooth uniform experience
            `
        },
        {
            text: `
                No need to install any apps, since all you need is a browser (and most OS do come with one!)
            `
        },
        {
            text: `
                Cost effectiveness. Reduced cost due to eliminated need to develop and test for various devices
            `
        }
    ];

    choises = [
        { title: 'Businesses and Operational' , text: 'For example: eCommerce admin, CRM, ERP', img: 'web-business'},
        { title: 'Businesses and Operational' , text: 'For example: eCommerce admin, CRM, ERP', img: 'web-reporting'},
        { title: 'Businesses and Operational' , text: 'For example: eCommerce admin, CRM, ERP', img: 'web-heavy-duty'},
        { title: 'Businesses and Operational' , text: 'For example: eCommerce admin, CRM, ERP', img: 'web-content'}
    ];

    services = [
        { img: 'services-logo-typescript-java', name: 'Java' },
        { img: 'services-logo-typescript-node', name: 'Node JS' },
        { img: 'services-logo-typescript-react', name: 'React Native' },
        { img: 'services-logo-typescript-angular', name: 'Angular' },
        { img: 'services-logo-typescript', name: 'TypeScript' }
    ];

    deliverables = [
        { title: 'Web App', img: 'deliv-web' },
        { title: 'Admin Dashboard', img: 'deliv-dashboard' },
        { title: 'Documentation', img: 'deliv-documentation' },
        { title: 'Source Code', img: 'deliv-sourcecode' }
    ];

    products = [
        { img: 'myn-logo' },
        { img: 'sparkoffer-logo' },
        { img: 'connected-copper' },
        { img: 'gv-logo' }
    ];

    render() {
        return (
            <section className="services__web">
                <div className="container">
                    <h3 className="tab-title">Web</h3>
                    <p className="text">
                        Web applications are used since the early 90s, and that’s for a number of good reasons such as:
                    </p>
                    <div className="services__ul-list">
                        {
                            this.blocks.map((item, index) => (
                                <div className="list-item" key={index}>
                                    <div className="list-style"></div>
                                    <div>
                                        {
                                            item.title
                                                ? <span className={item.titleOnNewLine ? 'block' : null}>{item.title}</span>
                                                : null
                                        }
                                        {item.text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="services__choices">
                        <Bubble size="350px" top="1400px" left="-270px" speed=".4"/>
                        <h4>Great choice for</h4>
                        <div className="choices-list">
                            {
                                this.choises.map((choice, index) => (
                                    <div className="list-item" key={index}>
                                        <img src={`assets/icons/` + choice.img + '.svg'} alt={choice.img} />
                                        <div>
                                            <p>{choice.title}</p>
                                            <p>{choice.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="services__approach">
                        <h4>Our Approach</h4>
                        <div className="approach-text">
                            <div>Domain Research</div>
                            <div>Product planning</div>
                            <div>Implementation & Delivery</div>
                            <div>Maintenance & Support</div>
                        </div>
                        <img src="assets/icons/approach-group-web.svg" alt="group-web" />
                        <div className="see-more">
                            <a href="/#">See more details</a>
                        </div>
                    </div>
                    <div className="services__deliverables">
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
                    <div className="services__technologies">
                        <Bubble size="1089px" top="1740px" left="920px" speed=".2"/>
                        <h4>Technologies</h4>
                        <div>
                            {
                                this.services.map((service, index) => (
                                    <div key={'technology-' + index}>
                                        <div>
                                            <img src={'assets/img/' + service.img + '.png'} alt={service.img} />
                                        </div>
                                        <span>{service.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="services__products">
                        <Bubble size="306px" top="1315px" left="-1380px" speed=".2"/>
                        <h4>Featured Products</h4>
                        <div>
                            {
                                this.products.map((product, index) => (
                                    <div key={'product-' + index}>
                                        <img src={'assets/img/' + product.img + '.png'} alt={product.img} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Web;
