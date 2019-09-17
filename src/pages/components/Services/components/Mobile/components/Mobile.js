import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";

export class Mobile extends Component {
    reasons = [
        {
            name: 'Ease of use.',
            text: 'A mobile app often serves a very narrow purpose, so the functionality is tailored to that purpose.'
        },
        {
            name: 'Personalization.',
            text: 'Ease of use is especially emphasized by the fact that a smartphone is mainly used by a single individual,'
        },
        {
            name: 'Always with you.',
            text: 'People take their smartphones with them wherever they go.'
        },
        {
            name: 'Notifications',
            text: 'allow you to get alerts and information updates in real time'
        }
    ];

    choises = [
        { title: 'E-Commerce' , text: 'For example: eCommerce admin, CRM, ERP' },
        { title: 'Media' , text: 'Dashboards, reports, charts'},
        { title: 'Lifestyle & Fitness' , text: 'Large screen interactions  and intense use of operational resources'},
        { title: 'Productivity | Utility' , text: 'Website is a good place for you to share information'},
        { title: 'IoT & Automation' , text: 'Large screen interactions  and intense use of operational resources' }
    ];

    services = [
        { img: 'services-logo-typescript-java', name: 'Java' },
        { img: 'services-logo-typescript-node', name: 'Node JS' },
        { img: 'services-logo-typescript-react', name: 'React Native' },
        { img: 'services-logo-typescript-angular', name: 'Angular' },
        { img: 'services-logo-typescript', name: 'TypeScript' }
    ];

    deliverables = [
        { title: 'iOS App' },
        { title: 'Android App' },
        { title: 'Hybrid App' },
        { title: 'Web App' }
    ];

    products = [
        { img: 'nuravine-logo' },
        { img: 'gv-logo' },
        { img: 'connected-copper' }
    ];

    render() {
        return (
            <section className="services__mobile">
                <div className="container">
                    <Bubble size="1089px" top="1850px" left="-400px" speed=".2"/>
                    <h3>Mobile</h3>
                    <p className="text">
                        Mobile Applications came into play since early 2000s, and gained more popularity each year.
                        Today mobile applications generate majority of internet traffic, and increasingly become the
                        #1 place to shop, find information, socialize, communicate, navigate, play, even bank, and so
                        much more, to many people. This astonishing user adoption is achieved due to a number of factors:
                    </p>
                    <div className="services__ul-list">
                        {
                            this.reasons.map((reason, index) => (
                                <div className="list-item" key={index}>
                                    <div className="list-style"></div>
                                    <div><span>{reason.name}</span> {reason.text}</div>
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
                                        <div></div>
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
                        <div className="services__approach__diagram">
                            <img src="assets/icons/implement.svg" alt="implement"/>
                        </div>
                    </div>
                    <div className="services__deliverables">
                        <Bubble size="735px" top="800px" left="920px" speed=".2"/>
                        <h4>Deliverables</h4>
                        <div>
                            {
                                this.deliverables.map((deliverable, index) => (
                                    <div key={'deliverable-' + index}>
                                        <div></div>
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
                                    <div key={'technology-' + index}>
                                        <div>
                                            <div>
                                                <img src={'assets/img/' + service.img + '.png'} alt={service.img}
                                                     srcSet={'assets/img/' + service.img + '@2x.png 2x, assets/img/' + service.img + '@3x.png 3x'}/>
                                            </div>
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
                                        <img src={'assets/img/' + product.img + '.png'} alt={product.img}
                                             srcSet={'assets/img/' + product.img + '@2x.png 2x, assets/img/' + product.img + '@3x.png 3x'}/>
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
