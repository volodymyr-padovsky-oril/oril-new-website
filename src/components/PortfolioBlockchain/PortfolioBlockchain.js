import React, {Component} from "react";
import {project} from "../../lib/our-projects";


export class PortfolioBlockchain extends Component {
    slides = [
        project.scroogeBot
    ];

    render() {
        return (
            <>
                <div className="slider-wrapper">
                        {
                            this.slides.map((slide, index) => (
                                <div key={'slide-' + index}>
                                    <div className="slide">
                                        <div className="slide__header">
                                            <div className="logo">
                                                <img src={`../assets/img/${slide.logo.name}${slide.logo.extension}`}
                                                     alt={slide.logo.name}/>
                                            </div>
                                            <a href={slide.link} target="_blank" rel="noopener noreferrer nofollow"
                                               className="title">{slide.title}</a>
                                            <div className="tags">
                                                {
                                                    slide.tags.map((tag, index) => (
                                                        <span key={`tag-${index}`}>{tag}</span>))
                                                }
                                            </div>
                                        </div>
                                        <div className="slide__content">
                                            <div className="left">
                                                <p className="text">{slide.text}</p>
                                                {
                                                    slide.info &&
                                                    <div className="info">
                                                        {
                                                            slide.info.map((item, index) => {
                                                                return (
                                                                    <div key={`info-${index}`}>
                                                                        <p className="info__title">{item.value}</p>
                                                                        <p className="info__text">{item.text}</p>
                                                                    </div>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                }
                                            </div>
                                            <div className="right">
                                                <img src={`../assets/img/${slide.img.name}${slide.img.extension}`}
                                                     alt={slide.img.name}/>
                                            </div>
                                        </div>
                                        {
                                            slide.customer &&
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
                                        }
                                    </div>

                                </div>
                            ))
                        }
                </div>
                <div className="slider-mobile-wrapper">
                    {
                        this.slides.map((slide, index) => (
                            <div key={'slide-' + index}>

                                <div className="slide">
                                    <div className="slide__header">
                                        <div className="logo">
                                            <img src={`../assets/img/${slide.logo.name}${slide.logo.extension}`}
                                                 alt={slide.logo.name}/>
                                        </div>
                                        <a href={slide.link} target="_blank" rel="noopener noreferrer nofollow"
                                           className="title">{slide.title}</a>
                                        <div className="tags">
                                            {
                                                slide.tags.map((tag, index) => (
                                                    <span key={`tag-${index}`}>{tag}</span>))
                                            }
                                        </div>
                                    </div>
                                    <div className="slide__content">
                                        <div className="left">
                                            <p className="text">{slide.text}</p>
                                            {
                                                slide.info &&
                                                <div className="info">
                                                    {
                                                        slide.info.map((item, index) => {
                                                            return (
                                                                <div key={`info-${index}`}>
                                                                    <p className="info__title">{item.value}</p>
                                                                    <p className="info__text">{item.text}</p>
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            }
                                        </div>
                                        <div className="right">
                                            <img src={`../assets/img/${slide.img.name}${slide.img.extension}`}
                                                 alt={slide.img.name}/>
                                        </div>
                                    </div>
                                    {
                                        slide.customer &&
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
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>
            </>
        );
    }
}

export default PortfolioBlockchain;
