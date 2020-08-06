import React, {Component} from "react";
import {withRouter} from "next/router";

import "react-tabs/style/react-tabs.css";
import "./index.scss";
import Link from "next/link";

export class BaseTabs extends Component {
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
        tab: 'marketplace'
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
            <div className="react-tabs">
                <div className={`react-tabs__list ${bottom ? '' : 'absolute-bottom'} ${show ? '' : 'sticky'}`}>
                    {
                        this.props.tabs.map((tab, index) => (
                                <div
                                    className={selected == index ? 'react-tabs__list__tab--selected' : 'react-tabs__list__tab'}
                                    key={index}>
                                    <Link className="react-tabs__tab" href={tab.href}>
                                        {tab.title}
                                    </Link>
                                </div>
                            )
                        )
                    }
                </div>
                <div className="react-tabs__tab-panel react-tabs__tab-panel--selected">
                    <div>{this.getTab(tabs, tab).component()}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(BaseTabs);


