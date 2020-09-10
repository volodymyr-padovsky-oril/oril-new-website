import React, {Component} from "react";
import Swiper from "react-id-swiper";
import {project} from "../../../../lib/our-projects";

export const params = {
    loop: true,
    // width: 1240,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
};

export class Testimonials extends Component {
    slides = [
        project.greenVision,
        project.plusDelta,
        project.laced
    ];

    render() {
        return (
            <section className="home__testimonials">
                <h3>Testimonials</h3>
                <div className="container">
                    <div className="swiper-wrapper">
                        <Swiper {...params}>
                            {
                                this.slides.map((slide, index) => (
                                    <div className="slide__footer">
                                        <div className="customer">
                                            <img
                                                src={`../assets/icons/${slide.customer.img.name}${slide.customer.img.extension}`}
                                                alt={slide.customer.img.name}/>
                                            <div>
                                                <p>{slide.customer.firstName} {slide.customer.lastName}</p>
                                                <p>{slide.customer.position}</p>
                                            </div>
                                        </div>
                                        <div className="feedback">
                                            {slide.customer.feedback}
                                        </div>
                                    </div>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
