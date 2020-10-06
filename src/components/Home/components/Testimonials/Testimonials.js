import React, {Component} from "react";
import Swiper from "react-id-swiper";
import {testimonials} from "../../../../lib/testimonials";

export const params = {
    loop: true,
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
    slides = testimonials

    render() {
        return (
            <section className="home__testimonials">
                <h3>Testimonials</h3>
                <div className="container">
                    <div className="swiper-wrapper">
                        <Swiper {...params}>
                            {
                                this.slides.map((slide, index) => (
                                    <div key={index} className="slide__footer">
                                        <div className="customer">
                                            <img
                                                src={`../assets/icons/${slide.img.name}${slide.img.extension}`}
                                                alt={slide.img.name}/>
                                            <div>
                                                <p>{slide.firstName} {slide.lastName}</p>
                                                <p>{slide.position}</p>
                                            </div>
                                        </div>
                                        <div className="feedback">
                                            {slide.feedback}
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
