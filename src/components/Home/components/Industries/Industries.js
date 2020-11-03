import React, {Component} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

import "react-tabs/style/react-tabs.css";
import Link from "next/link";

export class Industries extends Component {
    render() {
        return (
            <div className="home__industries">
                <div className="container">
                    <h3>Industries</h3>
                    <Tabs>
                        <TabList>
                            <Tab>Real Estate</Tab>
                            <Tab>IoT</Tab>
                            <Tab>FinTech</Tab>
                            <Tab>Marketplace</Tab>
                            <Tab>Health & Fitness</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="home__industries__tabpanel">
                                <div className="home__industries__text">
                                    <p>
                                        From working with the MLS and building consumer apps to rolling out loT
                                        solutions
                                        for real estate businesses, we enjoy leaving our mark on the proptech sector.
                                        Real estate is a highly unique area. It bridges design and engineering with
                                        government,
                                        construction, sales, and a multitude of other B2B and B2C services. Here at
                                        ORIL,
                                        we strive to expertly bring the physical built environment into beautiful
                                        digital experiences, and vice versa
                                    </p>
                                    <Link href="/portfolio/real-estate">
                                        <a>Featured Products</a>
                                    </Link>
                                </div>
                                <div className="home__industries__img">
                                    <img src="../assets/img/industries-real-estate.png" alt="iot"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="home__industries__tabpanel">
                                <div className="home__industries__text">
                                    <p>
                                        We constantly marvel at the new utilities being developed from loT. From staying
                                        at the forefront of these developments, we excel at rolling out applications and
                                        interfaces with the latest capabilities that technology has to offer. From
                                        connecting devices in real estate and environmental automation to consumer goods
                                        and beyond, we’ll make sure that your products communicate just as they shoud
                                    </p>
                                    <Link href="/portfolio/iot">
                                        <a>Featured Products</a>
                                    </Link>
                                </div>
                                <div className="home__industries__img">
                                    <img src="../assets/img/industries-iot.png" alt="industries-real-estate"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="home__industries__tabpanel">
                                <div className="home__industries__text">
                                    <p>
                                        Financial services are undergoing massive change these days.
                                        Whether it’s commercial lending, consumer banking, cryptocurrencies,
                                        or anything in between, there’s practically no area being left untouched
                                        by disruptive startups and corporate intrapreneurs.
                                        We’ve worked on multiple financial products over the years
                                        and is ready to bring that expertise to your team
                                    </p>
                                    <Link href="/portfolio/fin-tech">
                                        <a>Featured Products</a>
                                    </Link>
                                </div>
                                <div className="home__industries__img">
                                    <img src="../assets/img/industries-fintech.png" alt="industries-fintech"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="home__industries__tabpanel">
                                <div className="home__industries__text">
                                    <p>
                                        We take a strong product-centric approach with marketplaces, since their success
                                        depends
                                        on satisfying both consumer and supplier needs.
                                        To do this, we treat both sides of the marketplace as separate products that
                                        need their
                                        own set of compeling features and flows. Once we’re sure that both consumers and
                                        suppliers will find value in the marketplace, we build seamless ties between the
                                        two
                                        parties on mobile and web, all the way through checkout and beyond
                                    </p>
                                    <Link href="/portfolio/marketplace">
                                        <a>Featured Products</a>
                                    </Link>
                                </div>
                                <div className="home__industries__img">
                                    <img src="../assets/img/industries-marketplace.png" alt="industries-marketpace"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="home__industries__tabpanel">
                                <div className="home__industries__text">
                                    <p>
                                        Life is better when it’s balanced and driven by a healthy lifestyle.
                                        Here, we happily admit that our personal tastes drive our interest in
                                        working with lifestyle and fitness products. We’ve built solutions to
                                        power thousands of health clubs, bring fashion to the masses, and
                                        encourage everyone to be a little bit healthier while looking
                                        and feeling great
                                    </p>
                                    <Link href="/portfolio/lifestyle">
                                        <a>Featured Products</a>
                                    </Link>
                                </div>
                                <div className="home__industries__img">
                                    <img src="../assets/img/industries-lifestyle-fitness.png"
                                         alt="industries-lifestyle-fitness"/>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Industries;


