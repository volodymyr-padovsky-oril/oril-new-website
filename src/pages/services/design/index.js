import React, {Component} from "react";
import Bubble from "../../../commons/Bubble";
import SEOMetaTags from "../../../components/SEOMetaTags";
import Header from "../../../commons/Header";
import Contacts from "../../../components/Contacts/Contacts";
import Footer from "../../../commons/Footer";

export class Design extends Component {
    blocks = [
        {
            title: 'Research',
            titleOnNewLine: true,
            text: `
                Driven by human-centered design approach, our clients’ product idea
                and users behavior patterns are the subject of analysis and investigation
            `
        },
        {
            title: 'Best practices',
            titleOnNewLine: true,
            text: `
                We use Agile methodology and Design Sprint to provide step-by-step delivery of concepts ready to use
            `
        },
        {
            title: 'Integration',
            titleOnNewLine: true,
            text: `
                As designers, we care about development and this helps our clients execute complex web and mobile
                applications, turning them into beautiful and impactful products
            `
        },
        {
            title: "Users' feedback",
            titleOnNewLine: true,
            text: `
                Whatever your target audience is, it’s important to perform usability testing and gather users' opinions
                on a product release to make continuous UX
            `
        }
    ];

    deliverables = [
        {title: 'UI Designs', img: 'deliv-ui'},
        {title: 'UI Style Guides', img: 'deliv-guide'},
        {title: 'UX Artefacts', img: 'deliv-artefacts'},
        {title: 'Interactive Prototypes', img: 'deliv-prototype'},
        {title: 'Logotype & Brand Identity', img: 'deliv-brand'}
    ];

    services = [
        {img: 'services-logo-sketch', name: 'Sketch', link: 'https://www.sketch.com/'},
        {img: 'services-logo-figma', name: 'Figma', link: 'https://www.figma.com/'},
        {
            img: 'services-logo-photoshop',
            name: 'Adobe Photoshop',
            link: 'https://www.adobe.com/products/photoshop.html'
        },
        {
            img: 'services-logo-illustrator',
            name: 'Adobe Illustrator',
            link: 'https://www.adobe.com/products/illustrator.html'
        },
        {img: 'services-logo-zeplin', name: 'Zeplin', link: 'https://zeplin.io/'}
    ];

    products = [
        {img: 'nuravine-logo', link: 'https://www.nuravine.com/'},
        {img: 'gv-logo', link: 'https://greenvision-energy.com/'},
        {img: 'connected-copper', link: 'http://connectedcopper.com/'}
    ];

    render() {
        return (
            <div className="design-wrapper">
                <SEOMetaTags
                    title={"ORIL | Services"}
                    url={"/services"}
                    // description={}   add custom description for this page
                />
                <Header redirect={this.onChangePage}/>
                <section className="services">
                    <section className="services__design" id="design">
                        <div className="container">
                            <h2><span>01</span>UX/UI Design</h2>
                            <div className="services__desc">
                                <Bubble size="284px" top="365px" left="-1280px" speed=".2"/>
                                <Bubble size="1441px" top="1100px" left="740px" speed=".2"/>
                                <h3>Thoughtful User Interfaces for All Kind of Products</h3>
                                <p>
                                    Interactive prototyping, explicit UI/UX design, and branding with
                                    clear message for your web, desktop, mobile, smartwatch, and IoT products.
                                    This is how we’re becoming advocates of actual user needs and business goals
                                </p>
                                <div className="services__ul-list">
                                    {
                                        this.blocks.map((item, index) => (
                                            <div className="list-item" key={index}>
                                                <div className="list-style"></div>
                                                <div>
                                                    {
                                                        item.title
                                                            ? <span
                                                                className={item.titleOnNewLine ? 'block' : null}>{item.title}</span>
                                                            : null
                                                    }
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
                                <img src="../assets/icons/approach-group-design.svg" alt="group-design"/>
                                {/*<div className="see-more">*/}
                                {/*    <a href="/#">See more details</a>*/}
                                {/*</div>*/}
                            </div>
                            <div className="services__deliverables">
                                <h4>Deliverables</h4>
                                <div>
                                    {
                                        this.deliverables.map((deliverable, index) => (
                                            <div key={'deliverable-' + index} className="link-block">
                                                <img src={'../assets/icons/' + deliverable.img + '.svg'}
                                                     alt={deliverable.img}/>
                                                <span>{deliverable.title}</span>
                                            </div>
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
                                            <a href={service.link} target="_blank" rel="noopener noreferrer nofollow"
                                               key={'technology-' + index}>
                                                <div>
                                                    <img src={'../assets/img/' + service.img + '.png'} alt={service.img}/>
                                                </div>
                                                <span>{service.name}</span>
                                            </a>
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
                                            <a href={product.link} target="_blank" rel="noopener noreferrer nofollow"
                                               key={'product-' + index}>
                                                <img src={'../assets/img/' + product.img + '.png'} alt={product.img}
                                                     title={product.link}/>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section>

                </section>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default Design;
