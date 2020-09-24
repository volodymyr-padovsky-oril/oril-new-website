import React, {Component} from "react";
import Swiper from "react-id-swiper";
import {withRouter} from 'next/router';
import Link from "next/link";

export const params = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    speed: 1500,
    grabCursor: false,
    simulateTouch: false,
    observer: true,
    breakpoints: {
        900: {
            slidesPerView: 1,
        },
        1239: {
            slidesPerView: 2,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
};

const OurWorks = ({h2, h3, slides}) => {
        return (
            <section className="home__our-works">
                <div className="container-our-works" style={{maxWidth: "1240px"}}>
                    <h2>{h2}</h2>
                    <h3>{h3}</h3>
                    <div className="home__our-works__wrapper">
                        <Swiper {...params}>
                            {slides.map((slide, index) => (
                                    <div key={'slide-' + index}>
                                        <div className="slide">
                                            <img className={index !== 1 ? "slide__small-img": ""} src={`../../assets/img/${slide.img.name}${slide.img.extension}`}
                                                 alt={slide.img.name}/>
                                            <div className="slide__description">
                                                <div
                                                    className="title">{slide.title}
                                                </div>
                                                <div className="tags">
                                                    {
                                                        slide.tags.map((tag, index) => (
                                                            <a href={`https://oril.co/blog/tag/${tag}/`}
                                                               key={`tag-${index}`}>{tag}</a>))
                                                    }
                                                </div>
                                                <p className="text">{slide.text}</p>
                                                <Link href={`${slide.caseStudy}`}>
                                                    <a className="link">Learn more
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </Swiper>
                    </div>
                </div>
            </section>
        );
    }

export default OurWorks;
