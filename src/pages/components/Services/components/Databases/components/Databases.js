import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";

export class Databases extends Component {
    deliverables = [
        { title: 'iOS App' },
        { title: 'Android App' },
        { title: 'Hybrid App' },
        { title: 'Web App' }
    ];

    services = [
        { img: 'services-logo-typescript-java', name: 'Java' },
        { img: 'services-logo-typescript-node', name: 'Node JS' },
        { img: 'services-logo-typescript-react', name: 'React Native' },
        { img: 'services-logo-typescript-angular', name: 'Angular' },
        { img: 'services-logo-typescript', name: 'TypeScript' }
    ];

    products = [
        { img: 'nuravine-logo' },
        { img: 'gv-logo' },
        { img: 'connected-copper' }
    ];

    render() {
        return (
            <section className="services__databases">
                <div className="container">
                    <div className="services__desc">
                        <div>
                            <h3>Databases</h3>
                            <p>
                                Aliquam ut porttitor leo a diam sollicitudin tempor id.
                                Consequat ac felis donec et odio pellentesque diam. Pellentesque
                                id nibh tortor id aliquet. Nisl condimentum id venenatis a
                                condimentum vitae sapien pellentesque
                            </p>
                        </div>
                        <div className="services__technologies services__technologies--center">
                            <div>
                                {
                                    this.services.map((service, index) => (
                                        <div key={'service-' + index}>
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
                    </div>
                    <div className="services__deliverables">
                        <h3>Deliverables</h3>
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
                        <Bubble size="676px" top="1140px" left="940px" speed=".3"/>
                        <h3>Featured Products</h3>
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

export default Databases;
