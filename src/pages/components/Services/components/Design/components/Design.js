import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";

export class Design extends Component {
    deliverables = [
        { title: 'UI Designs' },
        { title: 'UI Style Guides' },
        { title: 'UX Artefacts' },
        { title: 'Interactive Prototypes' },
        { title: 'Logotype + Brand Identity' }
    ];

    services = [
        { img: 'services-logo-sketch', name: 'Sketch' },
        { img: 'services-logo-figma', name: 'Figma' },
        { img: 'services-logo-photoshop', name: 'Adobe Photoshop' },
        { img: 'services-logo-illustrator', name: 'Adobe Ai' },
        { img: 'services-logo-zeplin', name: 'Zeplin' }
    ];

    products = [
        { img: 'nuravine-logo' },
        { img: 'gv-logo' },
        { img: 'connected-copper' }
    ];

    render() {
        return (
            <section className="services__design" id="design" ref={this.props.section}>
                <div className="container">
                    <h2><span>01</span>UX/UI Design</h2>
                    <div className="services__desc">
                        <div>
                            <Bubble size="284px" top="365px" left="-1280px" speed=".2"/>
                            <Bubble size="1441px" top="1100px" left="740px" speed=".2"/>
                            <h4>Our Approach</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras dapibus vulputate diam eu pretium voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur
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
                        <Bubble size="216px" top="340px" left="-910px" speed=".1"/>
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

export default Design;
