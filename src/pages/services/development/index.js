import React, {Component} from "react";
import SEOMetaTags from "../../../components/SEOMetaTags";
import Header from "../../../commons/Header";
import Contacts from "../../../components/Contacts/Contacts";
import Footer from "../../../commons/Footer";
import '../design/_design.scss';
import OurWorks from "../../../components/Home/components/OurWorks/OurWorks";
import Link from '../../../commons/utils/activeLink';
import Lottie from "react-lottie";
import development from "../../../lib/lotties/development-services";
import {project} from "../../../lib/our-projects";
import  '../../../commons/BaseTabs/index.scss';
import  '../../../components/Home/components/OurWorks/_our-works.scss';
import  '../../../components/Services/styles/_services.scss';

export class Design extends Component {
    blocks = [
        {
            titleOnNewLine: true,
            text: `
                Our product managers and business analysts lay out roadmaps, feature maps, and requirements that prioritize what should be built and when.
            `
        },
        {
            titleOnNewLine: true,
            text: `
                Our programmers are specifically hired for their attention to detail and organizational skills, leading to quality code and a smooth process.
            `
        },
        {
            titleOnNewLine: true,
            text: `
                Our DevOps and team leads guide all programming efforts, ensuring that products are built on time and within budget.
            `
        },
    ];

    deliverables = [
        {
            title: 'Web App',
            img: 'deliv-ui',
            text: 'We develop everything from friendly consumer web apps to niche products with specific requirements.'
        },
        {
            title: 'Mobile App',
            img: 'deliv-guide',
            text: 'We build both native and hybrid mobile apps that function as standalone products or complement web experiences.'
        },
        {
            title: 'Dashboard',
            img: 'deliv-artefacts',
            text: 'We create dashboards that clearly show the KPIs businesses value when tracking their success.'
        },
        {
            title: 'Custom application',
            img: 'deliv-prototype',
            text: 'Need a desktop app? Software for a new piece of hardware? Whatever the requirements, we’ve got you covered!'
        },
        {
            title: 'Documentation',
            img: 'deliv-brand',
            text: 'We provide thorough documentation for all our programming, including general architecture, database schemas, and functional requirements.'
        },
        {
            title: 'Source Code',
            img: 'deliv-brand',
            text: 'All source code is provided via git repositories that your team can fully own and access.'
        }
    ];
    services = [
        {img: 'services-logo-typescript-java', name: 'Java', link: 'https://www.java.com/en/'},
        {img: 'services-logo-typescript-node', name: 'Node JS', link: 'https://nodejs.org/en/'},
        {
            img: 'services-logo-typescript-react',
            name: 'React Native',
            link: 'https://reactnative.dev/'
        },
        {
            img: 'services-logo-typescript-angular',
            name: 'Angular',
            link: 'https://angular.io/'
        },
        {img: 'services-logo-typescript', name: 'TypeScript', link: 'https://www.typescriptlang.org/'}
    ];

    products = [
        {img: 'nuravine-logo', link: 'https://www.nuravine.com/'},
        {img: 'gv-logo', link: 'https://greenvision-energy.com/'},
    ];

    process = [
        {
            title: '1. Product design',
            img: 'services-whale1',
            text: 'From researching competitors, markets, and users to wireframing and delivering high quality prototypes, we deliver product designs that make sense and look beautiful.',
            direction: 'odd'
        },
        {
            title: '2. Development',
            img: 'services-whale2',
            text: 'Our developers iteratively build products using Agile frameworks. We strictly adhere to client priorities and roadmaps, but also flexibly change course whenever the situation calls for it. All the while, our team leads maintain constant communication with both the client and their programmers to ensure that everyone is in sync.',
            direction: 'even'

        },
        {
            title: '3. Product Iterations & Feature Enhancements',
            img: 'services-whale3',
            text: 'We build upon existing products and features by proactively checking user engagement metrics or following client roadmaps. Based on these indicators, we find ways to roll out new features and improvements that continue to delight - and retain - existing customers.',
            direction: 'odd'

        },
        {
            title: '4. Maintenance & Support',
            img: 'services-whale4',
            text: 'All software needs regular maintenance to stay in top shape. This includes updating platforms, plugins, security settings, and content. Putting a concerted effort into solid maintenance can greatly extend the shelf life of any product’s code, which can in turn lead to significant cost reductions.',
            direction: 'even'
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
        animationData: development,
        // rendererSettings: {
        //     preserveAspectRatio: "xMidYMid slice"
        // }
    };

    NavLinks = () =>
        this.navLinks.map((link, index) => (
            <Link href={link.to} key={index} activeClassName="react-tabs__list__tab--selected">
                <div className="react-tabs__list__tab">
                    <a className="nav_item">
                        {link.name}
                    </a>
                </div>
            </Link>)
        );

    render() {
        return (
            <div className="design-wrapper">
                <SEOMetaTags
                    title={"ORIL | Product development"}
                    url={"/services/development"}
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
                                    <h1>Product Development</h1>
                                    <h3>Logical Roadmaps and Reliable Programming</h3>
                                    <p>
                                        Our product managers, business analysts, DevOps, and programmers work in tandem
                                        to ensure that we develop quality features on time and according to logical
                                        roadmaps.
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
                                <h2>Our Approach</h2>
                                <p>
                                    Depending on our clients’ internal capabilities, we pull select services from our
                                    offering that spans the entire product development lifecycle. Our goal is to
                                    complement your strengths with our own in order to produce the strongest possible
                                    product.
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
                                <p>Aside from fully functional software, we also deliver high quality documentation and
                                    source code.</p>
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
                        <OurWorks h2="Featured Products"
                                  slides={[project.sparkOffer, project.laced, project.sab]}/>
                    </section>
                </section>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default Design;
