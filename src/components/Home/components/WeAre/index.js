import React, {Component} from "react";
import {workersPages} from "../../../../lib/workers";
import Swiper from "react-id-swiper";
import VisibilitySensor from "react-visibility-sensor";

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
        }, 2000);
    }

    makeVisible = () => {
    };

    onChange =  (isVisible) => {
        isVisible &&
        this.setState({visible : true})

    };

    componentDidUpdate() {
        this.state.visible &&
        this.update()
    }

    render() {
        let {hover, visible} = this.state;
        console.log('visible', visible);
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
                                                const animal_src = "assets/img/" + worker.animal + ".png";
                                                const photoStyles = {
                                                    backgroundImage: "url(assets/img/" + worker.photo + ".jpg)",
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat',
                                                };

                                                const cardFront = {
                                                    opacity: 0,
                                                    transform: 'scale(.8)',
                                                    border: '1px solid red'
                                                };

                                                const cardBack = {
                                                    opacity: 1,
                                                    transform: 'scale(1)',
                                                    transitionDelay: '.2s',
                                                    backgroundImage: "url(assets/img/" + worker.photo + ".jpg)",
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat',
                                                };

                                                const description = {
                                                    opacity: 1,
                                                    transform: 'scale(1)',
                                                    transitionDelay: '.2s'
                                                };

                                                return (
                                                    <div className="card" key={'card-' + index}>
                                                        <div className="card__front" style={ worker.hover && hover ? cardFront : null}>
                                                            <img src={animal_src} alt={worker.animal}/>
                                                        </div>
                                                        <div className="card__back"
                                                             style={worker.hover && hover ? cardBack : photoStyles}>
                                                            <div className="card__back__desc"
                                                                 style={worker.hover && hover ? description : null}>
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
