import React, {Component} from "react";
import Bubble from "../../commons/Bubble";

export class Web extends Component {
    blocks = [
        {
            text: `
                A single Web Application is available on all types of platforms (Mobile, Web, iOS, Windows, Linux)
                and provides a smooth uniform experience
            `
        },
        {
            text: `
                A Web Application is accessible everywhere 
            `
        },
        {
            text: `
                A Web Browser is the only app you require. No need to install anything else to use your Web App            `
        },
        {
            text: `
                A Web Application reduces cost because it eliminates the need to develop and test for various devices
            `
        }
    ];

    choises = [
        { title: 'Businesses & Operational' , text: 'E-Commerce, CRM, ERP', img: 'web-business'},
        { title: 'Reporting & Analytics' , text: 'Dashboards, Reports, Charts', img: 'web-reporting'},
        { title: 'Graphic' , text: 'Graphic & Design, Detailed Views', img: 'web-heavy-duty'},
        { title: 'Content' , text: 'Blog, Video, Business Information', img: 'web-content'}
    ];

    services = [
        { img: 'services-logo-typescript-angular', name: 'Angular', link: 'https://angular.io/' },
        { img: 'services-logo-typescript-react', name: 'React', link: 'https://reactjs.org/' },
        { img: 'services-logo-typescript', name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { img: 'services-logo-typescript-java', name: 'Java', link: 'https://www.java.com/en/' },
        { img: 'services-logo-typescript-node', name: 'Node JS', link: 'https://nodejs.org/en/' },
        { img: 'services-logo-mongodb', name: 'MongoDB', link: 'https://www.mongodb.com/' },
        { img: 'services-logo-mysql', name: 'MySQL', link: 'https://www.mysql.com/' },
    ];

    deliverables = [
        { title: 'A Web Application', img: 'deliv-web' },
        { title: 'Admin Dashboard', img: 'deliv-dashboard' },
        { title: 'Documentation', img: 'deliv-documentation' },
        { title: 'Source Code', img: 'deliv-sourcecode' }
    ];

    products = [
        { img: 'myn-logo' ,link: 'https://matchyourneed.com/'},
        { img: 'connected-copper', link: 'http://connectedcopper.com/'},
        { img: 'gv-logo', link: 'https://greenvision-energy.com/'}
    ];

    render() {
        return (
            <section className="services__web">
                <div className="container">
                    <h3 className="tab-title">Web</h3>
                    <p className="text">
                        The use of Web Applications has boomed since the early days of the internet. Today you almost
                        certainly need a Web Application to operate an online business. There’s simply no other
                        solution that is as efficient and easy to use. Web Apps have been the #1 choice for countless
                        businesses for a number of reasons:</p>
                    <div className="services__ul-list">
                        {
                            this.blocks.map((item, index) => (
                                <div className="list-item" key={index}>
                                    <div className="list-style"></div>
                                    <div>
                                        {
                                            item.title
                                                ? <span className={item.titleOnNewLine ? 'block' : null}>{item.title}</span>
                                                : null
                                        }
                                        {item.text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="services__choices">
                        <Bubble size="350px" top="1400px" left="-270px" speed=".4"/>
                        <h4>Great choice for:</h4>
                        <div className="choices-list">
                            {
                                this.choises.map((choice, index) => (
                                    <div className="list-item" key={index}>
                                        <img src={`../../../assets/icons/` + choice.img + '.svg'} alt={choice.img} />
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
                        <img src="../../../assets/icons/approach-group-web.svg" alt="group-web" />
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
                                        <img src={'../../assets/icons/' + deliverable.img + '.svg'} alt={deliverable.img} />
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
                                    <a href={service.link} target="_blank" rel="noopener noreferrer nofollow" key={'technology-' + index}>
                                        <div>
                                            <img src={'../../assets/img/' + service.img + '.png'} alt={service.img} />
                                        </div>
                                        <span>{service.name}</span>
                                    </a>
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
                                    <a href={product.link} target="_blank" rel="noopener noreferrer nofollow" key={'product-' + index}>
                                        <img src={'../../assets/img/' + product.img + '.png'} alt={product.img} title={product.link}/>
                                    </a>
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
