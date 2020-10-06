import React, {useState, useEffect, useRef} from "react";
import Swiper from "react-id-swiper";
import Link from "next/link";


import Slider from "react-slick";

const OurWorks = ({h2, h3, slides}) => {
    const [retina, setRetina] = useState(2)
    const [width, setWidth] = useState(0)
    const [activeSlide, setActiveSlide] = useState(2)

    const sliderRef = useRef(1);

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
        beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex === 5 ? 0 : newIndex + 1),
      infinite: true,
      dots:false,
      slidesToShow: 3,
      initialSlide: 1,
        className:"center",
      slidesToScroll: 1,
      centerPadding: 100,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 1200,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };

    return (
        <section className="home__our-works">
            <div className="container-our-works" style={{maxWidth: "1240px"}}>
                <h2>{h2}</h2>
                <h3>{h3}</h3>
                <div className="home__our-works__wrapper">
                    <Slider ref={sliderRef} {...params}>
                        {[...slides, ...slides].map((slide, index) => (
                                    <div className="slide">
                                        <img src={`../../assets/img/${slide.img.name}${slide.img.extension}`}
                                                alt={slide.img.name}/>
                                        <div className={`slide__description ${activeSlide === index ? "active_slide": ""}`}>
                                            <Link href={`/portfolio/${slide.portfolio_type}`}>
                                                <div
                                                    className="title">{slide.title}
                                                </div>
                                            </Link>
                                            <div className="tags">
                                                {
                                                    slide.tags.map((tag, index) => (
                                                        <a href="https://oril.co/blog"
                                                            key={`tag-${index}`}>{tag}</a>))
                                                }
                                            </div>
                                            <p className="text">{slide.text}</p>
                                            {/*<Link href={`${slide.caseStudy}`}>*/}
                                            {/*    <a className="link">Learn more*/}
                                            {/*    </a>*/}
                                            {/*</Link>*/}
                                        </div>
                                    </div>
                            )
                        )}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default OurWorks;
