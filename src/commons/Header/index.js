import React from 'react';
import {NavLink} from "react-router-dom";
import "./index.scss";

export default (props) => {
    const redirect = (e) => {
        const elem = e.target;
        props.redirect(elem.pathname);
        window.scrollTo(0, 0)
    };

    return (
        <header>
            <div className="container">
                    <NavLink to={'/home'} onClick={redirect} className="logo">
                        <img src="assets/icons/logo-gold-nolabel.svg" alt="logo"/>
                        <h1>ORIL</h1>
                    </NavLink>

                <nav className="nav">
                    <NavLink to="/home" className="nav_item" activeClassName="active" onClick={redirect}>
                        Home
                    </NavLink>
                    <NavLink to="/services" className="nav_item" activeClassName="active" onClick={redirect}>
                        Services
                    </NavLink>
                    <NavLink to="/portfolio" className="nav_item" activeClassName="active" onClick={redirect}>
                        Portfolio
                    </NavLink>
                    <NavLink to="/blog" className="nav_item" activeClassName="active" onClick={redirect}>
                        Blog
                    </NavLink>
                    <NavLink to="/contact" className="nav_item" activeClassName="active" onClick={redirect}>
                        Contact Us
                    </NavLink>
                </nav>
                <div>
                    <button className="btn">Free Consultation</button>
                </div>
            </div>
        </header>
    )
};
