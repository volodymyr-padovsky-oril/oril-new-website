import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import "./index.scss";

export class Header extends Component {
    navLinks = [
        { name: 'Home', to: '/home' },
        { name: 'Services', to: '/services' },
        { name: 'Portfolio', to: '/portfolio' },
        { name: 'Blog', to: '/blog' },
        { name: 'Contact Us', to: '/contact' }
    ];

    brand = { name: 'ORIL', to: '/' };

    constructor(props) {
        super(props);
        this.state = { show: true };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const offsetTop = 100;
        const tabs = document.querySelector('.react-tabs');

        if (tabs) {
            this.setState({
                show: Math.floor(tabs.getBoundingClientRect().top) > offsetTop
            });
        }
    }

    NavLinks = () =>
        this.navLinks.map((link, index) => (
            <NavLink to={link.to} key={index} className="nav_item" activeClassName="active" onClick={this.redirect}>
                {link.name}
            </NavLink>
        ));

    redirect = (e) => {
        const elem = e.target;
        this.props.redirect(elem.pathname);
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <header className={this.state.show ? "active" : "hidden"}>
                <div className="container">
                    <NavLink to={this.brand.to} onClick={this.redirect} className="logo">
                        <img src="assets/icons/logo-gold-nolabel.svg" alt="logo"/>
                        <h1>{this.brand.name}</h1>
                    </NavLink>

                    <nav>
                        {this.NavLinks()}
                    </nav>
                    <div>
                        <button className="btn">Free Consultation</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
