import React, {Component} from "react";
import Bubble from "../../../../commons/Bubble";
import {workersPages} from "./workers";
import Swiper from "react-id-swiper";

export const params = {
    autoHeight: true,
    width: 555,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
};

export class WeAre extends Component {
    render() {
        return (
            <section className="home__we-are" id="we-are">
                <Bubble size="420px" top="3150px" right="-1700px" speed="0.8"/>
                <Bubble size="800px" top="2150px" left="-1300px" speed="0.5"/>
                <h3>Who We Are</h3>
                <div className="container">
                    <div className="home__we-are__text-wrapper">
                        <p className="intro-text">We are a diverse team of professionals who are passionate about digital products</p>
                        <div className="our-credo">
                            <h4>Our Credo</h4>
                            <p className="ul-item">Increasing World Efficiency</p>
                        </div>
                        <div className="our-values">
                            <h4>Our Values</h4>
                            <p className="ul-item">Make the team your greatest asset</p>
                            <p className="ul-item">Keep exploring</p>
                            <p className="ul-item">Be a part of solution</p>
                            <p className="ul-item">Prioritize time</p>
                            <p className="ul-item">Create limit-breaking products</p>
                        </div>
                    </div>
                    <div className="home__we-are__our-images">
                        <Swiper {...params}>
                            {
                                workersPages.map((workers, index) => (
                                    <div key={'slide-' + index}>
                                        {
                                            workers.map((worker, index) => {
                                                const animal_src = "assets/img/" + worker.animal + ".png";
                                                const photoStyles = {
                                                    backgroundImage: "url(assets/img/" + worker.photo + ".jpg)",
                                                    backgroundSize: 'contain',
                                                    backgroundRepeat: 'no-repeat'
                                                };

                                                return (
                                                    <div className="card" key={'card-' + index}>
                                                        <div className="card__front">
                                                            <img src={animal_src} alt={worker.animal} />
                                                        </div>
                                                        <div className="card__back" style={photoStyles}>
                                                            <div className="card__back__desc">
                                                                <span>{worker.name}</span>
                                                                <span>{worker.position}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
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

export default WeAre;
