import React, {Component} from "react";
import OurWorks from "../Home/components/OurWorks/OurWorks";

class CaseStudy extends Component {

    render() {
        return (
            <section className="case-study">
                <div className="container">
                    <div className="case-study__header">
                        <div className="case-study__left">
                            <img src="../assets/icons/green-vision-logo.svg" alt="green-vision"/>
                            <h2>
                                Set your own
                                energy goals
                            </h2>
                            <a href="https://greenvision-energy.com/">greenvision-energy.com</a>
                            <p>
                                GreenVision is a platform that allows anyone to envision their future without Carbon
                                Dioxide emissions: both on the scale of personal home and on the US scale.
                            </p>
                        </div>
                        <div className="case-study-right">
                            <img src="../assets/img/gv.jpg" alt="gv"/>
                        </div>
                    </div>
                    <div className="case-study__properties">
                        <div className="case-study__left">
                            <h4>Background</h4>
                            <span>SparkOffer approached ORIL to help with….They needed a partner agency with expertise in … in order to achieve …</span>
                            <h4>Duration</h4>
                            <span>MVP in 3.5 month, continuing work for 18+ months</span>
                            <h4>Scope</h4>
                            <span>146 screens, mobile responsive programming</span>
                            <h4>Team</h4>
                            <span>UI/UX designer, 3 Engineers, Project Manager, QA</span>
                        </div>
                        <div className="case-study__right">
                            <div className="tags">
                                <div>Web App</div>
                                <div>Responsive Design</div>
                                <div>MVP</div>
                                <div>Development</div>
                            </div>
                        </div>
                    </div>
                    <div className="case-study__poster">
                        <img src="../assets/img/green-vision2.jpg" alt="green-vision2"/>
                        <h3>
                            Envision our energy future. <br/> Make it a reality.
                        </h3>
                    </div>
                    <div className="case-study__ux-process">
                        <h2>UX Process</h2>
                        <p>
                            The goal of UX process was to identify the main pain points and
                            understand the process of using the product in daily work.
                            Our UX team has created high-fidelity wireframes to understand
                            the client’s vision as much as possible and to clarify all the features
                            of interface.
                        </p>
                        <img src="../assets/icons/green-vision3.svg" alt="green-vision3"/>
                    </div>
                    <div className="case-study__ui-concept">
                        <h2>UI Concept</h2>
                        <p>
                            SparkOffer UI system was carefully created to reflect its authenticity,
                            strong values and project identity: modern, ambitious, reliable, simple.
                        </p>
                        <div className="case-study__palette">
                            <div className="leafs">
                                <div className="leafs__item">
                                    <img src="../assets/icons/leaf-1.svg" alt="leaf-1"/>
                                    <span>3CD17F</span>
                                </div>
                                <div className="leafs__item">
                                    <img src="../assets/icons/leaf-2.svg" alt="leaf-2"/>
                                    <span>3CD17F</span>
                                </div>
                                <div className="leafs__item">
                                    <img src="../assets/icons/leaf-3.svg" alt="leaf-3"/>
                                    <span>3CD17F</span>
                                </div>
                                <div className="leafs__item">
                                    <img src="../assets/icons/leaf-4.svg" alt="leaf-4"/>
                                    <span>3CD17F</span>
                                </div>
                            </div>
                            <div className="fonts">
                                <span className="fonts--big">Aa</span>
                                <span className="fonts--green">Avenir Next</span>
                                <span
                                    className="fonts--regular-big">a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
                                <span
                                    className="fonts--regular">a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
                                <span className="fonts--regular">0123456789</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="case-study__big-image">
                    <img src="../assets/img/gv-big.jpg" alt="gv-bid"/>
                </div>
                <div className="container">
                    <div className="case-study__our-process">
                        <h2>Our Process</h2>
                        <div>
                            <h4>MVP</h4>
                            <div className="case-study__mvp">
                                <div className="process__wrapper--top">
                                    <div className="process__item">
                                        <span>Research</span>
                                        <div className="process__dot">
                                            <div></div>
                                        </div>
                                        <div className="process__img"
                                             style={{backgroundImage: 'url("/assets/icons/research.svg")'}}/>
                                        <p>1 week</p>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="case-study__upgrades">
                                    <h4 className="upgrades-title">Continuous <br/>Upgrades</h4>
                                    <div className="process__wrapper--bottom">
                                        <div className="process__item">
                                            <span>Research</span>
                                            <div className="process__dot">
                                                <div></div>
                                            </div>
                                            <div className="process__img"
                                                 style={{backgroundImage: 'url("/assets/icons/research.svg")'}}/>
                                            <p>1 week</p>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case-study__technologies">
                        <h2>Technologies</h2>
                        <p>
                            SparkOffer UI system was carefully created to reflect its authenticity,
                            strong values and project identity: modern, ambitious, reliable, simple.
                        </p>
                        <div>
                            <div className="technologies__wrapper">
                                <div className="technologies__item">
                                    <div>
                                        <img src="../assets/img/services-logo-typescript-angular.png" alt="angular"/>
                                    </div>
                                    <span>Angular</span>
                                </div>
                                <div className="technologies__item">
                                    <div>
                                        <img src="../assets/img/services-logo-typescript-angular.png" alt="angular"/>
                                    </div>
                                    <span>Angular</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case-study__our-results">
                        <h2>Our results</h2>
                        <p>
                            SparkOffer UI system was carefully created to reflect its authenticity,
                            strong values and project identity: modern, ambitious, reliable, simple.
                        </p>
                        {/*<div className="slide__footer">*/}
                        {/*    <div className="customer">*/}
                        {/*        <img*/}
                        {/*            src={`../assets/icons/${slide.customer.img.name}${slide.customer.img.extension}`}*/}
                        {/*            alt={slide.customer.img.name}/>*/}
                        {/*        <div>*/}
                        {/*            <p>{slide.customer.firstName} {slide.customer.lastName}</p>*/}
                        {/*            <p>{slide.customer.position}</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="feedback">*/}
                        {/*        {slide.customer.feedback}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="slide__footer">
                            <div className="customer">
                                <img
                                    src='../assets/icons/kuntz.jpeg'
                                    alt='kuntz'/>
                                <div>
                                    <p>Lauren Kuntz</p>
                                    <p>CEO of GreenVision</p>
                                </div>
                            </div>
                            <div className="feedback">
                                “They were phenomenal and really blew away all of my expectations.”
                            </div>
                        </div>
                        <div className="our-results__points">
                            <div className="our-results__item">
                                <div className="our-results__circle">
                                    2520
                                </div>
                                <span>Number of users on the platform</span>
                            </div>
                            <div className="our-results__item">
                                <div className="our-results__circle">
                                    2520
                                </div>
                                <span>Number of users on the platform</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="case-study__our-works">
                    <h2>A few more Case Studies you might <br/> be interested in</h2>
                    <OurWorks title={false}/>

                </div>
            </section>
        );
    }
}

export default CaseStudy;
