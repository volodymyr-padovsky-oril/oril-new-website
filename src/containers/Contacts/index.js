import React, { Component } from 'react';
import Form from "../../components/Form";
import './_styles.scss';

class Contacts extends Component {
    socials = [
        {
            link: 'https://www.linkedin.com/company/oril-software',
            imgSrc: 'assets/icons/linkedin.svg',
            alt: 'linkedin'
        },
        {
            link: 'https://medium.com/oril',
            imgSrc: 'assets/icons/medium.svg',
            alt: 'medium'
        },
        {
            link: 'https://www.behance.net/oril-software',
            imgSrc: 'assets/icons/behance.svg',
            alt: 'behance'
        },
        {
            link: 'https://www.facebook.com/orilsoftware',
            imgSrc: 'assets/icons/facebook.svg',
            alt: 'facebook'
        },
        {
            link: 'https://www.instagram.com/orilsoftware',
            imgSrc: 'assets/icons/instagram.svg',
            alt: 'instagram'
        },
        {
            link: 'https://twitter.com/orilsoftware',
            imgSrc: 'assets/icons/twitter.svg',
            alt: 'twitter'
        }
    ];

    render() {
        return (
            <section className="contact">
                <div className="container contact__wrapper">
                    <div className="contact__form">
                        <h2>Contact us</h2>
                        <p>This an introduction text. It has a fixed size, and a custom line height</p>
                        <Form/>
                    </div>
                    <div className="contact__info">
                        <div className="contact__info__block contact__info__block--border">
                            <p>Project Inquires</p>
                            <a href="mailto:sample@orilinc.com">sample@orilinc.com</a>
                        </div>
                        <div className="contact__info__block">
                            <p>Address</p>
                            <a href="https://goo.gl/maps/PWW2kZmqFzB2" target="blank">68 Jay Street Brooklyn, NY, 11201</a>
                        </div>
                        <div className="contact__info__block contact__info__block--border">
                            <p>Join the Team</p>
                            <a href="mailto:join@orilinc.com">join@orilinc.com</a>
                        </div>
                        <div className="contact__info__socials">
                            {
                                this.socials.map((item, index) => {
                                    return (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                                            <img src={item.imgSrc} alt={item.alt}/>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contacts;
