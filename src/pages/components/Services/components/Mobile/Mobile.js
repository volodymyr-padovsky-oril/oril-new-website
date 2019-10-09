import React, {Component} from "react";
import Bubble from "../../../../../commons/Bubble";

export class Mobile extends Component {
    blocks = [
        {
            name: 'Ease of use.',
            titleOnNewLine: false,
            text: 'A mobile app often serves a very narrow purpose, so the functionality is tailored to that purpose.'
        },
        {
            name: 'Personalization.',
            titleOnNewLine: false,
            text: 'Ease of use is especially emphasized by the fact that a smartphone is mainly used by a single individual,'
        },
        {
            name: 'Always with you.',
            titleOnNewLine: false,
            text: 'People take their smartphones with them wherever they go.'
        },
        {
            name: 'Notifications',
            titleOnNewLine: false,
            text: 'allow you to get alerts and information updates in real time'
        }
    ];

    choises = [
        {
            title: 'E-Commerce',
            text: 'Aliquam ut porttitor leo a diam sollicitudin tempor id',
            img: 'mobile-commerce'
        },
        {
            title: 'Media',
            text: 'Aliquam ut porttitor leo a diam sollicitudin tempor id',
            img: 'mobile-media'
        },
        {
            title: 'Lifestyle & Fitness',
            text: 'Aliquam ut porttitor leo a diam sollicitudin tempor id',
            img: 'mobile-lifestyle-and-fitness'
        },
        {
            title: 'Productivity | Utility',
            text: 'Aliquam ut porttitor leo a diam sollicitudin tempor id',
            img: 'mobile-productivity'
        },
        {
            title: 'IoT & Automation',
            text: 'Aliquam ut porttitor leo a diam sollicitudin tempor id',
            img: 'mobile-iot'
        }
    ];

    services = [
        { img: 'services-logo-typescript-java', name: 'Java' },
        { img: 'services-logo-typescript-node', name: 'Node JS' },
        { img: 'services-logo-typescript-react', name: 'React Native' },
        { img: 'services-logo-typescript-angular', name: 'Angular' },
        { img: 'services-logo-typescript', name: 'TypeScript' }
    ];

    deliverables = [
        { title: 'Mobile App', img: 'deliv-mobile' },
        { title: 'Admin Dashboard', img: 'deliv-dashboard' },
        { title: 'Documentation', img: 'deliv-documentation' },
        { title: 'Source code', img: 'deliv-sourcecode' }
    ];

    products = [
        { img: 'laced-logo' },
        { img: 'hoozeon-logo' },
        { img: 'activesoul-logo' },
        { img: 'vicki-logo' },
        { img: 'connected-copper' }
    ];

    render() {
        return (
            <section className="services__mobile">
                <div className="container">
                    <Bubble size="1089px" top="1850px" left="-400px" speed=".2"/>
                    <h3 className="tab-title">Mobile</h3>
                    <p className="text">
                        Mobile Applications came into play since early 2000s, and gained more popularity each year.
                        Today mobile applications generate majority of internet traffic, and increasingly become the
                        #1 place to shop, find information, socialize, communicate, navigate, play, even bank, and so
                        much more, to many people. This astonishing user adoption is achieved due to a number of factors:
                    </p>
                    <div className="services__ul-list">
                        {
                            this.blocks.map((item, index) => (
                                <div className="list-item" key={index}>
                                    <div className="list-style"></div>
                                    <div><span className={item.titleOnNewLine ? 'block' : null }>{item.name}</span> {item.text}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="services__choices">
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
                    <div className="services__technologies">
                        <Bubble size="407px" top="990px" left="-1800px" speed=".2"/>
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

export default Mobile;
