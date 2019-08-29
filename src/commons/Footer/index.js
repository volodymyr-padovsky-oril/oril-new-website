import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

export default (props) => {
    const redirect = (e) => {
        const elem = e.target;
        props.redirect(elem.pathname);
    };

    return (
        <footer>
            <div className="container">
                <div className="content">
                    <div className="nav-wrapper">
                        <img src="assets/icons/logo-white-nolabel.svg" alt="logo" className="logo-white"/>
                        <nav className="nav-footer">
                            <Link to="/home" className="nav_item" onClick={redirect}>
                                Home
                            </Link>
                            <Link to="/portfolio" className="nav_item" onClick={redirect}>
                                Portfolio
                            </Link>
                            <Link to="/blog" className="nav_item" onClick={redirect}>
                                Blog
                            </Link>
                            <Link to="/services" className="nav_item" onClick={redirect}>
                                Services
                            </Link>
                            <Link to="/contact" className="nav_item" onClick={redirect}>
                                Contact Us
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
