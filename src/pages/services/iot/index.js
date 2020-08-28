import React, {Component} from "react";
import SEOMetaTags from "../../../components/SEOMetaTags";
import Header from "../../../commons/Header";
import Contacts from "../../../components/Contacts/Contacts";
import Footer from "../../../commons/Footer";
import OurWorks from "../../../components/Home/components/OurWorks/OurWorks";
import Link from '../../../commons/utils/activeLink';
import Lottie from 'react-lottie';
import iot from "../../../lib/lotties/iot-services";

export class Iot extends Component {
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
        {
            title: 'UI Designs',
            img: 'deliv-ui',
            text: 'Final UI designs are delivered via Zeplin, which makes it even easier to coordinate with front end developers.'
        },
        {
            title: 'UI Style Guides',
            img: 'deliv-guide',
            text: 'We create style guides and design libraries in Sketch to ensure consistency across all future designs.'
        },
        {
            title: 'UX Artefacts',
            img: 'deliv-artefacts',
            text: 'Results from our UX work, such as customer journey mapping and usability testing, are all provided in their respective file formats.'
        },
        {
            title: 'Interactive Prototypes',
            img: 'deliv-prototype',
            text: 'We load our prototypes into services like ProtoPie and Invision to simulate how the app would behave once developed. '
        },
        {
            title: 'Logotype & Brand Identity',
            img: 'deliv-brand',
            text: 'The logos and visual brand identities that we create are often delivered alongside our style guides.'
        }
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
    ];

    process = [
        {
            title: 'Research',
            img: 'octo-research',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis.',
            direction: 'odd',
            ext: 'png'
        },
        {
            title: 'Product Design',
            img: 'octo-design',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis.',
            direction: 'even',
            ext: 'png'
        },
        {
            title: 'Web and mobile app',
            img: 'octo-web',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis.',
            direction: 'odd',
            ext: 'png'
        },
        {
            title: 'Device prototype',
            img: 'octo-prototype',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis.',
            direction: 'even',
            ext: 'png'
        },
        {
            title: 'Product release',
            img: 'octo-release',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis.',
            direction: 'odd',
            ext: 'png'
        },
    ];

    navLinks = [
        {name: 'UX/UI Design', to: '/services/design'},
        {name: 'Product Development', to: '/services/development'},
        {name: 'Iot', to: '/services/iot'},
    ];

    animationOptions = {
        loop: true,
        autoplay: true,
        animationData: iot,
        // rendererSettings: {
        //     preserveAspectRatio: "xMidYMid slice"
        // }
    };

    NavLinks = () =>
        this.navLinks.map((link, index) => (
            <Link href={link.to} key={index} activeClassName="active">
                <a className="nav_item">
                    {link.name}
                </a>
            </Link>)
        );

    render() {
        return (
            <div className="design-wrapper">
                <SEOMetaTags
                    title={"ORIL | Design"}
                    url={"/services/design"}
                    // description={}   add custom description for this page
                />
                <Header redirect={this.onChangePage}/>
                <section className="services">
                    <section className="services__design" id="design">
                        <div className="container">
                            <div className="header-link">
                                {this.NavLinks()}
                            </div>
                            <div className="services__desc">
                                <div className="services__desc--left">
                                    <h2>Iot</h2>
                                    <h3>Thoughtful User Interfaces for All Kind of Products</h3>
                                    <p>
                                        Design that works is design that clearly lays out solutions for user needs. This
                                        is
                                        achieved through methodical research, prototyping, and testing. Add to this our
                                        knowledge of usability heuristics and other psychological principles, and we’ll
                                        make
                                        sure that your product is ready for market!
                                    </p>
                                </div>
                                <div className="services__desc--right">
                                    <Lottie
                                        options={this.animationOptions}
                                    />
                                </div>
                            </div>
                            <div className="services__ul-list">
                                {this.blocks.map((item, index) => (
                                    <div className="list-item" key={index}>
                                        <div className="list-style"></div>
                                        <div>
                                            {item.title
                                                ? <span
                                                    className={item.titleOnNewLine ? 'block' : null}>{item.title}</span>
                                                : null}
                                            {item.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="services__process">
                                <h2>Our Approach</h2>
                                <p>
                                    Our practical approach to product design pulls heavily from tried-and-true
                                    methodologies. Due to the heavily streamlined process we’ve internalized, our team
                                    is able to focus its efforts on what matters most: your product.
                                </p>
                                <div className="process-wrapper">
                                    {this.process.map((item, index) => (
                                        <div className={`process-item ${item.direction === 'odd' && 'odd'}`}
                                             key={'process-item-' + index}>
                                            <img src={'../assets/img/' + item.img + '.' + item.ext}
                                                 alt={item.img}/>
                                            <div className="process-item__text">
                                                <span>{item.title}</span>
                                                <p>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="services__deliverables">
                                <h2>Deliverables</h2>
                                <p>Final deliverables depend on each project, but clients can expect to generally
                                    receive these items:</p>
                                <div className="deliverable__wrapper">
                                    {this.deliverables.map((deliverable, index) => (
                                        <div key={'deliverable-' + index} className="deliverable-item">
                                            <img src={'../assets/img/' + deliverable.img + '.svg'}
                                                 alt={deliverable.img}/>
                                            <span>{deliverable.title}</span>
                                            <p>{deliverable.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="services__technologies">
                                <h2>Technologies</h2>
                                <div>
                                    {this.services.map((service, index) => (
                                        <a href={service.link} target="_blank" rel="noopener noreferrer nofollow"
                                           key={'technology-' + index}>
                                            <div>
                                                <img src={'../assets/img/' + service.img + '.png'}
                                                     alt={service.img}/>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="products">
                            <h2>Featured Products</h2>
                            <OurWorks title={false}/>
                        </div>
                    </section>
                </section>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default Iot;
