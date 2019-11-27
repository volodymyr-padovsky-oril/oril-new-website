import React from "react";
import Link from 'next/link';
import "./index.scss";

export default (props) => {
    const redirect = (e) => {
        const elem = e.target;
        props.redirect(elem.pathname);
        window.scrollTo(0, 0);
    };

    return (
        <footer>
            <div className="container">
                <div className="content">
                    <div className="nav-wrapper">
                        <img src="assets/icons/logo-white-nolabel.svg" alt="logo" className="logo-white"/>
                        <nav className="nav-footer">
                            <Link href="/home">
                                <a className="nav_item" onClick={redirect}>
                                    Home
                                </a>
                            </Link>
                            <Link href="/portfolio">
                                <a className="nav_item" onClick={redirect}>
                                    Portfolio
                                </a>
                            </Link>
                            <Link href="/blog">
                                <a className="nav_item" onClick={redirect}>
                                    Blog
                                </a>
                            </Link>
                            <Link href="/services">
                                <a className="nav_item" onClick={redirect}>
                                    Services
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a className="nav_item" onClick={redirect}>
                                    Contact Us
                                </a>
                            </Link>
                        </nav>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2019. Oril Inc.</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};
