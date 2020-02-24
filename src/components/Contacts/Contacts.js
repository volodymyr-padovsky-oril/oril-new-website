import React, {Component} from "react";
import Snackbar from "../../commons/SnackBar";
import Form from "../../commons/Form";
import CompanyInfo from "../../commons/Header/CompanyInfo";
import {withRouter} from "next/router";
import {connect} from "react-redux";

class Contacts extends Component {

    socials = [
        {
            link: 'https://www.linkedin.com/company/oril-software',
            imgSrc: '../../assets/icons/linkedin.svg',
            alt: 'linkedin'
        },
        {
            link: 'https://clutch.co/profile/oril',
            imgSrc: '../../assets/icons/clutch.svg',
            alt: 'clutch'
        },
        {
            link: 'https://www.behance.net/oril-software',
            imgSrc: '../../assets/icons/behance.svg',
            alt: 'behance'
        },
        {
            link: 'https://www.facebook.com/orilsoftware',
            imgSrc: '../../assets/icons/facebook.svg',
            alt: 'facebook'
        },
        {
            link: 'https://www.instagram.com/orilsoftware',
            imgSrc: '../../assets/icons/instagram.svg',
            alt: 'instagram'
        },
        {
            link: 'https://twitter.com/orilsoftware',
            imgSrc: '../../assets/icons/twitter.svg',
            alt: 'twitter'
        }
    ];

    constructor(props) {
        super(props);
        this.state = {mobileMode: ""};
        this.toggleMobileMode = this.toggleMobileMode.bind(this);
    }

    componentDidMount() {
        this.setState({
            mobileMode: window.innerWidth < 768
        });
        window.addEventListener('resize', this.toggleMobileMode);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.toggleMobileMode);
    }

    toggleMobileMode() {
        const mobileMode = window.innerWidth < 768;

        if (this.state.mobileMode !== mobileMode) {
            this.setState({mobileMode});
        }
    }

    render() {
        return (
            <section className="contact">
                <div className={`${this.state.mobileMode ? '' : 'container'} contact__wrapper`}>
                    <div className="container">
                        <div className="contact__form">
                            <h2>Contact Us</h2>
                            {this.props.isSnackbarOpen ? <Snackbar/> : <Form data={this.props.data}/>}
                        </div>
                    </div>
                    <div className="container">
                        <div className="contact__info">
                            <div className="contact__info__block contact__info__block--border">
                                <p>Inquires & Information</p>
                                <a href="mailto:contact@oril.co">contact@oril.co</a>
                            </div>
                            <div className="contact__info__block">
                                <p>Address</p>
                                <a href="https://goo.gl/maps/PWW2kZmqFzB2" target="blank">68 Jay Street Brooklyn,
                                    NY, 11201</a>
                            </div>
                            <div className="contact__info__block contact__info__block--border">
                                <p>Join the Team</p>
                                <a href="mailto:join@oril.co">join@oril.co</a>
                            </div>
                            <div className="contact__info__socials">
                                {
                                    this.socials.map((item, index) => {
                                        return (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer"
                                               key={index}>
                                                <img src={item.imgSrc} alt={item.alt}/>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <CompanyInfo/>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    isSnackbarOpen: state.helper.isSnackbarOpen,
    snackbarText: state.helper.text
});

export default withRouter(connect(mapStateToProps, null)(Contacts));
