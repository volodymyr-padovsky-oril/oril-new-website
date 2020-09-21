import React, {Component} from "react";
import CompanyInfo from "./CompanyInfo";
import Link from '../utils/activeLink';

import './index.scss';

export class Header extends Component {
    navLinks = [
        {name: 'Services', to: '/services', internal: true},
        {name: 'Portfolio', to: '/portfolio', internal: true},
        {name: 'Blog', to: '/blog', internal: false},
        {name: 'Contact Us', to: '/contacts', internal: true},
    ];

    brand = {name: 'ORIL', to: '/'};
    lastScrollTop = 0;

    constructor(props) {
        super(props);
        this.state = {
            overlayActive: false,
            main_scroll: false,
        };
    }

    init() {
        const hamburger = document.querySelector('[data-toggle="collapse"]');
        const selector = hamburger.getAttribute('data-target');

        hamburger.addEventListener('click', () => {
            collapse(selector, 'toggle');
        }, false);

        const collapse = function (selector, cmd) {
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
                this.setState({overlayActive: false}, () => this.collapse());
            }
        };
    }

    componentDidMount() {
        const {main} = this.props;
        this.navbar = document.querySelector('header');
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('touchmove', this.handleScroll);
        this.init();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('touchmove', this.handleScroll);
    }

    toggleHamburger() {
        this.setState({overlayActive: !this.state.overlayActive}, () => {
            document.body.style.overflow = this.state.overlayActive ? 'hidden' : '';
        });
    }

    handleScroll = () => {
        const { main } = this.props
        const scrollTop = window.scrollY;
        const navBarHeight = this.navbar.offsetHeight;

        const currentScrollTop = scrollTop;
        if(main) {
            if (this.lastScrollTop > navBarHeight) {
                this.navbar.classList.add('hidden_main');
                this.setState({
                    main_scroll: true
                })
            } else if (this.lastScrollTop < navBarHeight) {
                this.navbar.classList.remove('hidden_main');
                this.setState({
                    main_scroll: false
                })
            }
    
        }
        else {
            if (this.lastScrollTop < currentScrollTop && scrollTop > navBarHeight + navBarHeight) {
                this.navbar.classList.add('hidden');
            } else if (this.lastScrollTop > currentScrollTop && !(scrollTop <= navBarHeight)) {
                this.navbar.classList.remove('hidden');
            }
        }

        this.lastScrollTop = currentScrollTop;
    }


    NavLinks = () =>
        this.navLinks.map((link, index) => (
            link.internal
                ? (
                    <Link href={link.to} key={index} activeClassName="active">
                        <a  
                            style={this.props.main && {color: '#fff'}}
                            href={link.to}
                            className="nav_item" onClick={this.redirect}>
                            {link.name}
                        </a>
                    </Link>)
                : (<a href={link.to} style={this.props.main && {color: '#fff'}}
                      key={index} className="nav_item" rel="nofollow noopener noreferrer">{link.name}</a>)
        ));

    redirect = (e) => {
        const elem = e.target;
        if (this.props.redirect) {
            this.props.redirect(elem.pathname);
        }
        window.scrollTo(0, 0);

        if (this.state.overlayActive) {
            this.toggleHamburger();
            this.collapse();
        }
    };

    render() {
        const {main} = this.props;
        const { main_scroll } = this.state
        
        return (
            <header
                className={`${main ? 'main__header': ''} ${this.state.overlayActive ? 'open' : 'close'}`}>
                <div className="container">
                    <Link href={this.brand.to}>
                        <a
                            onClick={this.redirect}
                            href={this.brand.to}
                            className="logo"
                        >
                            <img src={`${this.state.overlayActive
                                ? '../../assets/icons/logo-white-nolabel.svg'
                                : (main ? (main_scroll ? '../../assets/icons/logo-gold-nolabel.svg' : '../../assets/icons/logo-white-nolabel.svg') : '../../assets/icons/logo-gold-nolabel.svg')
                            }`}
                                 alt="logo"/>

                            {/*<p className="logo__text">{this.brand.name}</p>*/}
                        </a>
                    </Link>
                    <nav>
                        {this.NavLinks()}
                    </nav>
                    <div className="button-wrapper">
                        <a href="https://calendly.com/oril" target="_blank" rel="noopener noreferrer nofollow">
                            <button style={main && {color: '#000'}} className="btn">
                                Free Consultation
                            </button>
                        </a>
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
                        {this.NavLinks()}
                        <div className="button-wrapper">
                            <a href="https://calendly.com/oril" target="_blank" rel="noopener noreferrer nofollow">
                                <button className="btn">Free Consultation</button>
                            </a>
                        </div>
                        <CompanyInfo/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
