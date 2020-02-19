import React, {Component} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {parse} from "query-string";
import {later} from "../utils/main";
import {scrollTo} from "../utils/scroll";
import {withRouter} from "next/router";

import "react-tabs/style/react-tabs.css";
import "./index.scss";

const CustomTab = ({ children, activeClassName }) => (
    <Tab className={`react-tabs__tab ${activeClassName}`}>
        <div>
            <div>
                {children}
            </div>
        </div>
    </Tab>
);

CustomTab.tabsRole = 'Tab';

export class BaseTabs extends Component {
    constructor(props) {
        super(props);
        this.startIndex = props.startIndex || 0;
        this.state = {
            activeTab: 0,
            show: true,
            bottom: false
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({activeTab: this.startIndex});
        this.tabsContainer = document.querySelector('.react-tabs');
        this.tabList = document.querySelector('.react-tabs__tab-list');
        this.tabs = document.querySelectorAll('.react-tabs__tab');
        this.div = document.createElement('div');
        this.div.classList.add('sub-template');
        const query = parse(window.location.search);
        const tabIndex = this.props.tabs.findIndex(tab => tab.id === query.activeTab);

        if (tabIndex !== -1) {
            this.handleSelect(tabIndex);
        }

        later().then(() => this.setActiveTabBorders());
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const offsetTop = window.innerWidth < 1240 ? 0 : 100;

        if (this.tabsContainer) {
            const template = document.querySelector('.sub-template');
            const condition = Math.floor(this.tabsContainer.getBoundingClientRect().top > offsetTop);
            const conditionBottom = this.tabsContainer.getBoundingClientRect().bottom > 920;
            if (condition) {
                if (template) {
                    this.tabList.parentNode.removeChild(template);
                }
            } else {
                if (!(typeof(template) != 'undefined' && template != null)) {
                    this.tabList.parentNode.insertBefore(this.div, this.tabList.nextSibling);
                }
            }

            this.setState({
                show: condition,
                bottom: conditionBottom
            });
        }
    }

    setActiveTabBorders() {
        const selectedTab = document.querySelector('.react-tabs__tab--selected');
        const tabsCount = this.tabs.length;
        const activeClass = 'react-tabs__tab--active';
        let selectedTabIndex = 0;

        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].classList.remove(activeClass);
            if (this.tabs[i] === selectedTab) {
                selectedTabIndex = i;
            }
        }

        switch (selectedTabIndex) {
            case 0:
                this.tabs[0].classList.add(activeClass);
                break;
            case tabsCount:
                this.tabs[tabsCount].classList.add(activeClass);
                break;
            default:
                selectedTab.classList.add(activeClass);
                selectedTab.previousElementSibling.classList.add(activeClass);
                break;
        }
    }

    handleSelect(index) {
        this.setState({ activeTab: index });
        this.props.router.push({
            pathname: `/${this.props.pathname}`,
            hash: `${this.props.tabs[index].id}`
        });

        console.log('asPath',this.props.router.pathname)
        later().then(() => this.setActiveTabBorders());
        let selector = '#development';

        switch (this.props.pathname) {
            case 'services':
                selector = '#development';
                break;
            case 'portfolio':
                selector = '#products';
                break;
            default:
                break;
        }

        if (document.querySelector(selector)) {
            scrollTo(selector);
        }
    }

    render() {
        return (
            <Tabs onSelect={this.handleSelect} selectedIndex={this.state.activeTab}>
                <div className="tab-list-wrapper">
                    <TabList className={`react-tabs__tab-list ${this.state.bottom ? '' : 'absolute-bottom'} ${this.state.show ? '' : 'sticky'}`}>
                        {
                            this.props.tabs.map((tab, index) => (
                                <CustomTab
                                    activeClassName={this.state.activeTab === index ? 'react-tabs__tab--selected' : ''}
                                    key={index}>
                                    {tab.title}
                                </CustomTab>)
                            )
                        }
                    </TabList>
                </div>
                {
                    this.props.tabs.map((tab, index) => (<TabPanel key={index}>{tab.component()}</TabPanel>))
                }
            </Tabs>
        );
    }
}

export default withRouter(BaseTabs);
