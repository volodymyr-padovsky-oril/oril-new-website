import React, {Component} from "react";
import Bubble from "../../commons/Bubble";

export class Mobile extends Component {
    blocks = [
        {
            titleOnNewLine: false,
            text: 'A Mobile App often serves a very narrow purpose, so the functionality is tailored to that purpose'
        },
        {
            name: 'Personalization.',
            titleOnNewLine: false,
            text: 'A smartphone is typically used by a single individual, so an application can be tailored to their preferences'
        },
        {
            name: 'Always with you.',
            titleOnNewLine: false,
            text: 'People take their smartphones with them wherever they go'
        },
        {
            name: 'Notifications',
            titleOnNewLine: false,
            text: 'allow you to get alerts and information updates in real time'
        }
    ];

    choises = [
        {
            title: 'E-Commerce',
            text: 'Sell creatively in a few hits',
            img: 'mobile-commerce'
        },
        {
            title: 'Media',
            text: 'Connect people and content wherever they are',
            img: 'mobile-media'
        },
        {
            title: 'Lifestyle & Fitness',
            text: 'Exercice, plan events, and stay healthy on the go',
            img: 'mobile-lifestyle-and-fitness'
        },
        {
            title: 'Productivity & Utility',
            text: 'Be more efficient in your day-to-day business activities',
            img: 'mobile-productivity'
        },
        {
            title: 'IoT & Automation',
            text: 'Control and monitor your surroundings with a few hits',
            img: 'mobile-iot'
        }
    ];

    services = [
        { img: 'services-logo-typescript-angular', name: 'Angular', link: 'https://angular.io/' },
        { img: 'services-logo-typescript-react', name: 'React', link: 'https://facebook.github.io/react-native/' },
        { img: 'services-logo-typescript-react', name: 'React Native', link: 'https://facebook.github.io/react-native/' },
        { img: 'services-logo-ionic', name: 'Ionic', link: 'https://ionicframework.com/' },
        { img: 'services-logo-typescript', name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { img: 'services-logo-typescript-node', name: 'Node JS', link: 'https://nodejs.org/en/' },
        { img: 'services-logo-mongodb', name: 'MongoDB', link: 'https://www.mongodb.com/' },
        { img: 'services-logo-mysql', name: 'MySQL', link: 'https://www.mysql.com/' },
        { img: 'services-logo-firebase', name: 'FireBase', link: 'https://firebase.google.com/?gclid=EAIaIQobChMI1YWZo4aw5QIV0OeaCh02QgJyEAAYASAAEgJ2j_D_BwE' },
    ];

    deliverables = [
        { title: 'Mobile App', img: 'deliv-mobile' },
        { title: 'Admin Dashboard', img: 'deliv-dashboard' },
        { title: 'Documentation', img: 'deliv-documentation' },
        { title: 'Source code', img: 'deliv-sourcecode' }
    ];

    products = [
        { img: 'laced-logo', link: 'https://laced-app.com/'},
        { img: 'hoozeon-logo', link: 'https://www.hoozeon.us/'},
        { img: 'activesoul-logo', link: 'https://www.activesoul.us/'},
        { img: 'vicki-logo', link: 'https://getvicki.com/'},
        { img: 'connected-copper', link: 'http://connectedcopper.com/'}
    ];

    render() {
        return (
            <section className="services__mobile">
                <div className="container">
                    <Bubble size="1089px" top="1850px" left="-400px" speed=".2"/>
                    <h3 className="tab-title">Mobile</h3>
                    <p className="text">
                        Mobile Apps came into play in early 2000s and have become more popular each other.
                        Today, Mobile Apps generate the majority of internet traffic and increasingly become the
                        #1 place to shop, find information, socialize, communicate, navigate, play, even bank, and so
                        much more, for many people. This astonishing user adoption is achieved due to a number of factors:
                    </p>
                    <div className="services__ul-list">
                        {
                            this.blocks.map((item, index) => (
                                <div className="list-item" key={index}>
                                    <div className="list-style"></div>
                                    <div><span className={item.titleOnNewLine ? 'block' : null }>{item.name}</span> {item.text}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="services__choices">
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
                        <Bubble size="735px" top="800px" left="920px" speed=".2"/>
                        <h4>Deliverables</h4>
                        <div>
                            {
                                this.deliverables.map((deliverable, index) => (
                                    <div key={'deliverable-' + index} className="link-block">
                                        <img src={'../../../assets/icons/' + deliverable.img + '.svg'} alt={deliverable.img} />
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
                                    <a href={service.link} target="_blank" rel="noopener noreferrer nofollow" key={'technology-' + index}>
                                        <div>
                                            <img src={'../../../assets/img/' + service.img + '.png'} alt={service.img} />
                                        </div>
                                        <span>{service.name}</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="services__products">
                        <h4>Featured Products</h4>
                        <div>
                            {
                                this.products.map((product, index) => (
                                    <a href={product.link} target="_blank" rel="noopener noreferrer nofollow" key={'product-' + index}>
                                        <img src={'../../../assets/img/' + product.img + '.png'} alt={product.img} title={product.link}/>
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

export default Mobile;
