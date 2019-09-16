import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {parse} from "query-string";

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

        this.state = {
          activeTab: 0
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(index) {
        this.setState({ activeTab: index });
        this.props.history.push({
            pathname: '/services',
            search: `?activeTab=${this.props.tabs[index].id}`
        });
    }

    componentDidMount() {
        const query = parse(window.location.search);
        const tabIndex = this.props.tabs.findIndex(tab => tab.id === query.activeTab);

        if (tabIndex !== -1) {
            this.handleSelect(tabIndex);
        }
    }

    render() {
        return (
            <Tabs onSelect={this.handleSelect} selectedIndex={this.state.activeTab}>
                <TabList>
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
