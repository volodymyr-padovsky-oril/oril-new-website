import React, {Component} from "react";
import {withRouter} from "next/router";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

import "react-tabs/style/react-tabs.css";
// import "./index.scss";
import Link from "next/link";

const CustomTab = ({children, activeClassName}) => (
    <Tab className={`react-tabs__tab ${activeClassName}`}>
        <div>
            <div>
                {children}
            </div>
        </div>
    </Tab>
);

CustomTab.tabsRole = 'Tab';

export class Industries extends Component {
    constructor(props) {
        super(props);
        this.startIndex = props.startIndex || 0;
        this.state = {
            activeTab: 0,
            show: true,
            bottom: true
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    static defaultProps = {
        tab: 'web'
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.tabsContainer = document.querySelector('.react-tabs');
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const offsetTop = window.innerWidth < 1240 ? 0 : 100;
        if (this.tabsContainer) {
            const condition = Math.floor(this.tabsContainer.getBoundingClientRect().top > offsetTop);
            const conditionBottom = this.tabsContainer.getBoundingClientRect().bottom > 920;

            this.setState({
                show: condition,
                bottom: conditionBottom
            });
        }
    }

    getTab(arr, value) {
        let result = arr.filter(function (o) {
            return o.id === value;
        });
        return result ? result[0] : null;
    }

    render() {
        const {tabs, tab, selected} = this.props;
        const {bottom, show} = this.state;
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
                                    <Link href="/portfolio/real-estate">
                                        Featured Products
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
                                    <Link href="/portfolio/iot">
                                        Featured Products
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
                                        Featured Products
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
                                        Featured Products
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
                                    <Link href="/portfolio/lifestyle">
                                        Featured Products
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

export default withRouter(Industries);


