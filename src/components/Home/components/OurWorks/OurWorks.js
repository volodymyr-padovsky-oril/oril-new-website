import React, {Component} from "react";
import Swiper from "react-id-swiper";
import {project} from "../../../../lib/our-projects";
import Link from "next/link";

export const params = {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    width: 1240,
    slidesPerView: 3,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    }
};

export class OurWorks extends Component {
    redirect = (e) => {
        const elem = e.target;
        this.props.redirect(elem.pathname);
        window.scrollTo(0, 0)
    };

    slides = [
        project.greenVision,
        project.sparkOffer,
        project.laced,
    ];

    render() {
        return (
            <section className="home__our-works">
                <h3>{this.props.title}</h3>
                <div className="home__our-works__wrapper">
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
                                            <Link href={`case-study/${slide.link}`}>
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
            </section>
        );
    }
}

export default OurWorks;
