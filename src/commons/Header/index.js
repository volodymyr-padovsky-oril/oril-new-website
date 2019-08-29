import React from 'react';
import {Link} from "react-router-dom";
import "./index.scss";

export default (props) => {
    const path = props.path;

    const redirect = (e) => {
        const elem = e.target;
        props.redirect(elem.pathname);
        window.scrollTo(0, 0)
    };

    return (
        <header>
            <div className="container">
                    <Link to={'/home'} onClick={redirect} className="logo">
                        <img src="assets/icons/logo-gold-nolabel.svg" alt="logo"/>
                        <h1>ORIL</h1>
                    </Link>

                <nav className="nav">
                    <Link to="/home" className={path === "/home" ? "active nav_item" : "nav_item"} onClick={redirect}>
                        Home
                    </Link>
                    <Link to="/services" className={path === "/services" ? "active nav_item" : "nav_item"} onClick={redirect}>
                        Services
                    </Link>
                    <Link to="/portfolio" className={path === "/portfolio" ? "active nav_item" : "nav_item"} onClick={redirect}>
                        Portfolio
                    </Link>
                    <Link to="/blog" className={path === "/blog" ? "active nav_item" : "nav_item"} onClick={redirect}>
                        Blog
                    </Link>
                    <Link to="/contact" className={path === "/contact" ? "active nav_item" : "nav_item"} onClick={redirect}>
                        Contact Us
                    </Link>
                </nav>
                <div>
                    <button className="btn">Free Consultation</button>
                </div>
            </div>
        </header>
    )
};
