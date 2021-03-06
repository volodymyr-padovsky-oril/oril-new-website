import React, {Component} from "react";
import SEOMetaTags from "../../../components/SEOMetaTags";
import Header from "../../../commons/Header";
import Contacts from "../../../components/Contacts/Contacts";
import Footer from "../../../commons/Footer";
import '../services.scss';
import OurWorks from "../../../components/Home/components/OurWorks/OurWorks";
import Link from '../../../commons/utils/activeLink';
import Lottie from 'react-lottie';
import ux from "../../../lib/lotties/ux-services";
import {project} from "../../../lib/our-projects";
import  '../../../commons/BaseTabs/index.scss';
import  '../../../components/Home/components/OurWorks/_our-works.scss';
import  '../../../components/Services/styles/_services.scss';
import '../../index.scss';

export class Design extends Component {
    blocks = [
        {
            title: 'Research',
            titleOnNewLine: true,
            text: `
            Driven by human-centered design approach, we translate clients’ product ideas 
            into design patterns that are intuitive and highly complementary to existing user behaviour

            `
        },
        {
            title: 'Best Practices',
            titleOnNewLine: true,
            text: `
            We prioritize our design work based on product roadmaps, then follow 
            Agile methodologies and design sprints to provide just-in-time delivery of concepts that are ready for programming
            `
        },
        {
            title: 'Integration',
            titleOnNewLine: true,
            text: `
            Because we design around user needs, rather than just product features, we’re prepared 
            to create solutions spanning any combination of web, desktop, mobile, smartwatch, and IoT applications
            `
        },
        {
            title: "Users' Feedback",
            titleOnNewLine: true,
            text: `
            We believe that measured investment into usability testing throughout the design 
            phase is crucial. Doing so before moving on to development leads to less re-work and a greater chance of success after launch

            `
        }
    ];

    deliverables = [
        {
            title: 'UI Designs',
            img: 'deliv-ui',
            text: 'Final UI designs are delivered via Zeplin, which makes it even easier to coordinate with front end engineers'
        },
        {
            title: 'UI Style Guides',
            img: 'deliv-guide',
            text: 'We create style guides and design libraries in Sketch to ensure consistency across all future designs'
        },
        {
            title: 'UX Artefacts',
            img: 'deliv-artefacts',
            text: 'Results from our UX work, such as customer journey mapping and usability testing, are all provided in their respective file formats'
        },
        {
            title: 'Interactive Prototypes',
            img: 'deliv-prototype',
            text: 'We load our prototypes into services like ProtoPie and Invision to simulate how the app would behave once developed'
        },
        {
            title: 'Logotype & Brand Identity',
            img: 'deliv-brand',
            text: 'The logos and visual brand identities that we create are often delivered alongside our style guides'
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
            title: '1. Analyze',
            img: 'services-panther1',
            text: 'We lay out and analyze the specific solutions that need to be designed for specific user needs. To accomplish this, we look at any existing products and user engagement metrics, conduct customer persona interviews, and create user maps, among other things',
            direction: 'odd'
        },
        {
            title: '2. Wireframe & Test',
            img: 'services-panther2',
            text: 'Based off our research, we lay out basic designs for the solution’s most important flows. Quickly creating low fidelity wireframes allows us to rapidly assess weak points when testing the designs with real customers or customer personas',
            direction: 'even'

        },
        {
            title: '3. Prototype & Implement',
            img: 'services-panther3',
            text: 'Based on our usability testing results, we create high fidelity prototypes with all supporting flows, empty states, and error messsages. We then document the functionality, if needed, and work with the engineers to ensure that the designs are implemented correctly',
            direction: 'odd'
        },
    ];

    navLinks = [
        {name: 'UX/UI Design', to: '/services/design'},
        {name: 'Product Development', to: '/services/development'},
        // {name: 'Iot', to: '/services/iot'},
    ];

    animationOptions = {
        loop: true,
        autoplay: true,
        animationData: ux,
        // rendererSettings: {
        //     preserveAspectRatio: "xMidYMid slice"
        // }
    };

    NavLinks = () =>
        this.navLinks.map((link, index) => (
            <Link href={link.to} key={index} activeClassName="react-tabs__list__tab--selected">
                <div className="react-tabs__list__tab">
                    <a>
                        {link.name}
                    </a>
                </div>
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
                            <div className="react-tabs__list">
                                {this.NavLinks()}
                            </div>
                            <div className="services__desc">
                                <div className="services__desc--left">
                                    <h1>UX/UI Design</h1>
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
                                        // width={613}
                                    />
                                </div>
                            </div>
                            <div className="services__ul-list">
                                {this.blocks.map((item, index) => (
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
                                ))}
                            </div>
                            <div className="services__process">
                                <h2>Our Process</h2>
                                <p>
                                    Our practical approach to product design pulls heavily from tried-and-true
                                    methodologies. Due to the heavily streamlined process we’ve internalized, our team
                                    is able to focus its efforts on what matters most: your product
                                </p>
                                <div className="process-wrapper">
                                    {this.process.map((item, index) => (
                                        <div className={`process-item ${item.direction === 'odd' && 'odd'}`}
                                             key={'process-item-' + index}>
                                            <img src={'../assets/img/' + item.img + '.jpg'}
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
                                <p>All clients receive full access to the design files and supporting work created throughout our collaboration together</p>
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
                                            <span>{service.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <OurWorks h2="Featured Products"
                                  slides={[project.laced, project.greenVision, project.scroogeBot]}/>
                    </section>
                </section>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default Design;
