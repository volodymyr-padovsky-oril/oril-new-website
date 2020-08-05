import React, {Component} from "react";
import Swiper from "react-id-swiper";
import {project} from "../../../../lib/our-projects";

export const params = {
    // Optional parameters
    loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    width: 1740,
    slidesPerView: 3,
};

export class OurWorks extends Component {
    redirect = (e) => {
        const elem = e.target;
        this.props.redirect(elem.pathname);
        window.scrollTo(0, 0)
    };

    slides = [
        project.greenVision,
        project.plusDelta,
        project.laced
    ];

    render() {
        return (
            <section className="our-works">
                {this.props.title && <h3>Our works</h3>}
                <div className="our-works__wrapper">
                    <Swiper {...params}>
                        {this.slides.map((slide, index) => (
                                <div key={'slide-' + index}>
                                    <div className="slide">
                                        <img src={`../assets/img/${slide.img.name}${slide.img.extension}`}
                                             alt={slide.img.name}/>
                                        <div>
                                            <div
                                                className="title">{slide.title}
                                            </div>
                                            <div className="tags">
                                                {
                                                    slide.tags.map((tag, index) => (
                                                        <span key={`tag-${index}`}>{tag}</span>))
                                                }
                                            </div>
                                            <p className="text">{slide.text}</p>
                                            <a href={slide.link} target="_blank" rel="noopener noreferrer nofollow"
                                               className="link">
                                                Learn more
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            )
                        )}
                    </Swiper>
                </div>
            </section>
        );
    }
}

export default OurWorks;
