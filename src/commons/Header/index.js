import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import CompanyInfo from "./CompanyInfo";
import Bubble from "../Bubble";

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
        this.state = { show: true, overlayActive: false };
        this.handleScroll = this.handleScroll.bind(this);
    }

    init() {
        const hamburger = document.querySelector('[data-toggle="collapse"]');
        const selector = hamburger.getAttribute('data-target');

        hamburger.addEventListener('click', () => {
            collapse(selector, 'toggle');
        }, false);

        const collapse = function(selector, cmd) {
            const fnmap = {
                'toggle': 'toggle',
                'show': 'add',
                'hide': 'remove'
            };

            const targets = Array.from(document.querySelectorAll(selector));
            targets.forEach(target => target.classList[fnmap[cmd]]('show'));
        };

        this.collapse = collapse.bind(this, selector, 'hide');

        window.onresize = () => {
            if (window.outerWidth >= 768 && this.state.overlayActive) {
                this.setState({ overlayActive: false }, () => this.collapse());
            }
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('touchmove', this.handleScroll);
        this.init();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('touchmove', this.handleScroll);
    }

    toggleHamburger() {
        this.setState({ overlayActive: !this.state.overlayActive }, () => {
            document.body.style.overflow = this.state.overlayActive ? 'hidden' : 'auto';
            document.body.parentElement.style.overflow = this.state.overlayActive ? 'hidden' : 'auto';
        });
    }

    handleScroll() {
        const offsetTop = 100;
        const tabs = document.querySelector('.react-tabs');

        if (tabs) {
            this.setState({
                show: window.innerWidth < 768 || Math.floor(tabs.getBoundingClientRect().top) > offsetTop
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
        window.scrollTo(0, 0);

        if (this.state.overlayActive) {
            this.toggleHamburger();
            this.collapse();
        }
    };

    render() {
        return (
            <header className={`${this.state.show ? "active" : "hidden"} ${this.state.overlayActive ? 'open' : 'close'}`}>
                <div className="container">
                    <NavLink to={this.brand.to} onClick={this.redirect} className="logo">
                        <img src={`${this.state.overlayActive
                            ? 'assets/icons/logo-white-nolabel.svg'
                            : 'assets/icons/logo-gold-nolabel.svg'}`} alt="logo"/>
                        <p className="logo__text">{this.brand.name}</p>
                    </NavLink>
                    <nav>
                        {this.NavLinks()}
                    </nav>
                    <div className="button-wrapper">
                        <button className="btn">Free Consultation</button>
                    </div>
                    <div className="nav-wrapper">
                        <div className="top-block" data-toggle="collapse" data-target=".collapse"
                             onClick={this.toggleHamburger.bind(this)}>
                        </div>
                        <div className={`${this.state.overlayActive ? 'is-active' : ''} hamburger hamburger--squeeze`}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-template">
                    <div className="collapse-template__content">
                        <Bubble size="200px" top="100px" left="-800px" speed=".7"/>
                        <Bubble size="500px" top="1000px" left="400px" speed=".7"/>
                        <Bubble size="359px" top="1600px" left="500px" speed=".7"/>
                        {this.NavLinks()}
                        <div className="button-wrapper">
                            <button className="btn">Free Consultation</button>
                        </div>
                        <CompanyInfo/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
