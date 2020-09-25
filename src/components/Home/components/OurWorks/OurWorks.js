import React, {useState, useEffect} from "react";
import Swiper from "react-id-swiper";
import Link from "next/link";

const OurWorks = ({h2, h3, slides}) => {
    const [retina, setRetina] = useState(2)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setRetina(ifRetina())
        setWidth(window.innerWidth)
    }, [retina, width])
   
    const ifRetina = () => {
    if (window.matchMedia) {
        var mq = window.matchMedia(
            "only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)"
        );
        return (mq && mq.matches) || window.devicePixelRatio > 1;
        }
    }

    const params = {
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

    const params_1 = {
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
        width: retina ? 992 : 1240,
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

    const param = width < 1240 ? params : params_1
    console.log(param.width)

    return (
        <section className="home__our-works">
            <div className="container-our-works" style={{maxWidth: "1240px"}}>
                <h2>{h2}</h2>
                <h3>{h3}</h3>
                <div className="home__our-works__wrapper">
                    {setRetina !== 2 && <Swiper {...param}>
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
                    </Swiper>}
                </div>
            </div>
        </section>
    );
}

export default OurWorks;
