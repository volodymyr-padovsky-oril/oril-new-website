import React, {Component} from "react";
import {project} from "../../lib/our-projects";
import Link from "next/link";
import Countup from "../../commons/Countup";
import ProgressiveImage from "react-progressive-image-loading";


export class PortfolioLifestyleAndFitness extends Component {
    slides = [
        project.as
    ];

    render() {
        return (
            <>
                <div className="slider-wrapper">
                    {this.slides.map((slide, index) => (
                        <div className="slide" key={'slide-' + index}>
                            <div className="slide__content">
                                <div className="left">
                                    <div className="slide__header">
                                        <div className="logo">
                                            <img src={`../assets/img/${slide.logo.name}${slide.logo.extension}`}
                                                 alt={slide.logo.name}/>
                                        </div>
                                        <a href={slide.link} target="_blank" rel="noopener noreferrer nofollow"
                                           className="title">{slide.title}</a>
                                    </div>
                                    <div className="tags">
                                        {slide.tags.map((tag, index) => (
                                            <a href="https://oril.co/blog"
                                               key={`tag-${index}`}>{tag}
                                            </a>))}
                                    </div>
                                    <p className="text">{slide.text}</p>
                                    {/*{slide.caseStudy && <Link href={`${slide.caseStudy}`}>*/}
                                    {/*    <a className="link">Learn more*/}
                                    {/*    </a>*/}
                                    {/*</Link>}*/}
                                    {
                                        slide.info &&
                                        <div className="info">
                                            {
                                                slide.info.map((item, index) => {
                                                    return (
                                                        <div key={`info-${index}`}>
                                                            <div className="info__title">
                                                                <Countup circle={item.value} string={item.string}/>
                                                            </div>
                                                            <p className="info__text">{item.text}</p>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    }
                                </div>
                                <div className="right">
                                    <ProgressiveImage
                                        preview={`../assets/img/${slide.img.name}__lazy${slide.img.extension}`}
                                        src={`../assets/img/${slide.img.name}${slide.img.extension}`}
                                        render={(src, style) => <img src={src} style={style} />}
                                    />
                                </div>
                            </div>
                            {slide.customer &&
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
                            </div>}
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default PortfolioLifestyleAndFitness;
