import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";

export class Web extends Component {
    reasons = [
        {
            name: 'Ease of use.',
            text: 'A mobile app often serves a very narrow purpose, so the functionality is tailored to that purpose.'
        },
        {
            name: 'Ease of use.',
            text: 'A mobile app often serves a very narrow purpose, so the functionality is tailored to that purpose.'
        }
    ];

    choises = [
        { title: 'Businesses and Operational' , text: 'For example: eCommerce admin, CRM, ERP'},
        { title: 'Businesses and Operational' , text: 'For example: eCommerce admin, CRM, ERP'},
        { title: 'Businesses and Operational' , text: 'For example: eCommerce admin, CRM, ERP'},
        { title: 'Businesses and Operational' , text: 'For example: eCommerce admin, CRM, ERP'}
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
            <section className="services__web">
                <div className="container">
                    <h3>Web</h3>
                    <p className="text">
                        Web applications are used since the early 90s, and that’s for a number of good reasons such as:
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
                        <Bubble size="350px" top="1400px" left="-270px" speed=".4"/>
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
                    <div className="services__technologies">
                        <Bubble size="1089px" top="1740px" left="920px" speed=".2"/>
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
                    <div className="services__deliverables">
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
                    <div className="services__products">
                        <Bubble size="306px" top="1315px" left="-1380px" speed=".2"/>
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

export default Web;
