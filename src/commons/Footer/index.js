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
                            <Link href="/">
                                <a className="nav_item" onClick={redirect}>
                                    Home
                                </a>
                            </Link>
                            <Link href="/portfolio">
                                <a className="nav_item" onClick={redirect}>
                                    Portfolio
                                </a>
                            </Link>

                            <a href="/blog" className="nav_item" rel="nofollow" onClick={redirect}>
                                Blog
                            </a>

                            <Link href="/services">
                                <a className="nav_item" onClick={redirect}>
                                    Services
                                </a>
                            </Link>
                            <Link href="/contacts">
                                <a className="nav_item" onClick={redirect}>
                                    Contact Us
                                </a>
                            </Link>
                        </nav>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2020. Oril Inc.</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};
