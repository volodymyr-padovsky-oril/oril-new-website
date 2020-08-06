import React, {Component} from "react";

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
                                <span className="fonts--regular-big">a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
                                <span className="fonts--regular">a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
                                <span className="fonts--regular">0123456789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CaseStudy;
