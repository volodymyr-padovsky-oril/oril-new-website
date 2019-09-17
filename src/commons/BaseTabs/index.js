import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {parse} from "query-string";
import {later} from "../utils/main";
import {scrollTo} from "../utils/scroll";

import "react-tabs/style/react-tabs.css";
import './index.scss';

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
        this.state = { activeTab: 0, show: true };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({activeTab: this.startIndex});
        this.tabs = document.querySelector('.react-tabs');
        this.tabsHeader = document.querySelector('.react-tabs__tab-list');
        this.tabsHeaders = document.querySelectorAll('.react-tabs__tab');
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
        const offsetTop = 20;

        if (this.tabs) {
            const template = document.querySelector('.sub-template');
            const condition = Math.floor(this.tabs.getBoundingClientRect().top > offsetTop);

            if (condition) {
                if (template) {
                    this.tabsHeader.parentNode.removeChild(template);
                }
            } else {
                if (!(typeof(template) != 'undefined' && template != null)) {
                    this.tabsHeader.parentNode.insertBefore(this.div, this.tabsHeader.nextSibling);
                }
            }

            this.setState({
                show: condition
            });
        }
    }

    setActiveTabBorders() {
        const selectedTab = document.querySelector('.react-tabs__tab--selected');
        const tabsCount = this.tabsHeaders.length;
        const activeClass = 'react-tabs__tab--active';
        let selectedTabIndex = 0;

        for (let i = 0; i < this.tabsHeaders.length; i++) {
            this.tabsHeaders[i].classList.remove(activeClass);
            if (this.tabsHeaders[i] === selectedTab) {
                selectedTabIndex = i;
            }
        }

        switch (selectedTabIndex) {
            case 0:
                this.tabsHeaders[0].classList.add(activeClass);
                break;
            case tabsCount:
                this.tabsHeaders[tabsCount].classList.add(activeClass);
                break;
            default:
                selectedTab.classList.add(activeClass);
                selectedTab.previousElementSibling.classList.add(activeClass);
                break;
        }
    }

    handleSelect(index) {
        this.setState({ activeTab: index });
        this.props.history.push({
            pathname: `/${this.props.pathname}`,
            search: `?activeTab=${this.props.tabs[index].id}`
        });

        later().then(() => this.setActiveTabBorders());
        scrollTo('#development');
    }

    render() {
        return (
            <Tabs onSelect={this.handleSelect} selectedIndex={this.state.activeTab}>
                <TabList className={`react-tabs__tab-list ${this.state.show ? '' : 'sticky'}`}>
                    {
                        this.props.tabs.map((tab, index) => (
                            <CustomTab activeClassName={this.state.activeTab === index ? 'react-tabs__tab--selected' : ''} key={index}>
                                {tab.title}
                            </CustomTab>)
                        )
                    }
                </TabList>
                {
                    this.props.tabs.map((tab, index) => (<TabPanel key={index}>{tab.component()}</TabPanel>))
                }
            </Tabs>
        );
    }
}

export default withRouter(BaseTabs);
