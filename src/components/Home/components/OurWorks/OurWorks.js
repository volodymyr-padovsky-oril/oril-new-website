import React, {Component} from "react";
import Swiper from "react-id-swiper";
import Link from "next/link";

export const params = {
    loop: true,
    
    slidesPerView: 3,
    spaceBetween: 50,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false
    // },
    // width: 1240,
    speed: 1500,
    breakpoints: {
        900: {
            slidesPerView: 1,
        },
        1239: {
            slidesPerView: 2,
        }
    }
};

export class OurWorks extends Component {
    redirect = (e) => {
        const elem = e.target;
        this.props.redirect(elem.pathname);
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <section className="home__our-works">
                <div className="container-our-works" style={{maxWidth: "1240px"}}>
                    <h2 style={{textAlign: "center"}}>{this.props.title}</h2>
                    <div className="home__our-works__wrapper">
                        <Swiper {...params}>
                            {this.props.slides.map((slide, index) => (
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
                                                            <span key={`tag-${index}`}>{tag}</span>))
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
}

export default OurWorks;
