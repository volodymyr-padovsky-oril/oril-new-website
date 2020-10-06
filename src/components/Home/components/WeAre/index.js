import React, {Component} from "react";
import {workersPages} from "../../../../lib/workers";
import Swiper from "react-id-swiper";
import VisibilitySensor from "react-visibility-sensor";
import WeAreItem from './WeAreItem';
import WeAreItemMobile from "./WeAreItemMobile";

export const params = {
    autoHeight: true,
    width: 620,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        visible: false
    }
};

export const paramsMobile = {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        visible: false
    }
};

export class WeAre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: true,
            visible: false
        }
    }

    update() {
        this.change = setTimeout(() => {
            this.setState({hover: false})
        }, 3000);
    }

    onChange = (isVisible) => {
        isVisible &&
        this.setState({visible: true})

    };

    render() {
        let {visible} = this.state;
        return (
            <section className="home__we-are" id="we-are">
                <h3>Who We Are</h3>
                <div className="container">
                    <div className="home__we-are__text-wrapper">
                        <p className="intro-text">We are a diverse team of professionals who are passionate about
                            digital products</p>
                        <div className="our-credo">
                            <VisibilitySensor onChange={this.onChange}>
                                <h4>Our Kredo</h4>
                            </VisibilitySensor>
                            <p className="ul-item">Increasing World Efficiency</p>
                        </div>
                        <div className="our-values">
                            <h4 onClick={this.update.bind(this)}>Our Values</h4>
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
                                                return (
                                                    <WeAreItem key={'slide-' + index} index={index} worker={worker}
                                                               visible={visible}/>
                                                )
                                            })
                                        }
                                    </div>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className="home__we-are__our-images--mobile">
                        <Swiper {...paramsMobile}>
                            {
                                workersPages.map((workers, index) => (
                                    <div key={'slide-' + index}>
                                        {
                                            workers.map((worker, index) => {
                                                return (
                                                    <WeAreItemMobile key={'slide-' + index} index={index}
                                                                     worker={worker}/>
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
