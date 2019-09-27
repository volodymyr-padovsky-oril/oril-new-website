import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";

export class Design extends Component {
    blocks = [
        {
            title: 'Research',
            text: `
                Driven by human-centered design approach, our clients’ product idea
                and users behavior patterns remain to be a subject of analysis and investigation.
            `
        },
        {
            title: 'Best practices',
            text: `
                We use Agile methodology and Design Sprint to provide step-by-step delivery of concepts ready to use
            `
        },
        {
            title: 'Integration',
            text: `
                As designers, we do care about development and this helps our clients execute complex web and mobile
                applications, turning them into beautiful and impactful products
            `
        },
        {
            title: 'Users feedback',
            text: `
                Whatever your target audience is, it’s worth to perform usability testing and gather users opinions
                on a product release to make continuous UX
            `
        }
    ];

    deliverables = [
        { title: 'UI Designs', img: 'deliv-ui' },
        { title: 'UI Style Guides', img: 'deliv-guide' },
        { title: 'UX Artefacts', img: 'deliv-artefacts' },
        { title: 'Interactive Prototypes', img: 'deliv-prototype' },
        { title: 'Logotype + Brand Identity', img: 'deliv-brand' }
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
                        <Bubble size="284px" top="365px" left="-1280px" speed=".2"/>
                        <Bubble size="1441px" top="1100px" left="740px" speed=".2"/>
                        <h3>Thoughtful User Interfaces for All Kind of Products</h3>
                        <p>
                            Interactive prototyping, explicit UI/UX design and branding with
                            clear message for your web, desktop, mobile, smartwatch and IoT products.
                            This is how we’re becoming advocates of actual user needs and business goals.
                        </p>
                        <div className="services__ul-list">
                            {
                                this.blocks.map((item, index) => (
                                    <div className="list-item" key={index}>
                                        <div className="list-style"></div>
                                        <div>
                                            {item.title ? <span>{item.title}</span> : null}
                                            {item.text}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="services__approach">
                        <h4>Our Approach</h4>
                        <div className="approach-text">
                            <div>Analyse</div>
                            <div>Prototype</div>
                            <div>Design</div>
                            <div>Test</div>
                        </div>
                        <img src="assets/icons/approach-group-design.svg" alt="group-design" />
                        <div className="see-more">
                            <a href="/#">See more details</a>
                        </div>
                    </div>
                    <div className="services__deliverables">
                        <h4>Deliverables</h4>
                        <div>
                            {
                                this.deliverables.map((deliverable, index) => (
                                    <a href="/#" key={'deliverable-' + index}>
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
