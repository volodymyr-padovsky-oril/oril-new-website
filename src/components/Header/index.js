import React from 'react';
import {Link} from "react-router-dom";
import "./index.scss";

export default (props) => {
    const path = props.path;

    const redirect = (e) => {
        const elem = e.target;
        props.redirect(elem.pathname);
    };

    return (
        <header id="header">
            <div className="container">
                <div className="col-1">
                    <Link to={'/home'} onClick={redirect}>
                        <img src="assets/icons/logo-dark-nolabel.svg" alt="logo" className="logo"/>
                    </Link>
                </div>
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
                        Contact
                    </Link>
                </nav>
                <div className="col-2 align-self-center">
                    <button className="btn">Free Consultation</button>
                </div>
            </div>
        </header>
    )
};
