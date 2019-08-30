import React, {Component} from 'react';
import Bubble from "../../../../../../commons/Bubble";

export class WeAre extends Component {
    workers = [{
        animal: 'animal-toucan',
        photo: 'photo',
        name: 'Tarquin Biscuit-Barrel',
        position: 'Lead Project Manager'
    }, {
        animal: 'animal-whale',
        photo: 'photo',
        name: 'Tarquin Biscuit-Barrel',
        position: 'Lead Project Manager'
    }, {
        animal: 'animal-wolf',
        photo: 'photo',
        name: 'Tarquin Biscuit-Barrel',
        position: 'Lead Project Manager'
    }, {
        animal: 'animal',
        photo: 'photo',
        name: 'Tarquin Biscuit-Barrel',
        position: 'Lead Project Manager'
    }, {
        animal: 'animal-horse',
        photo: 'photo',
        name: 'Tarquin Biscuit-Barrel',
        position: 'Lead Project Manager'
    }, {
        animal: 'animal-toucan',
        photo: 'photo',
        name: 'Tarquin Biscuit-Barrel',
        position: 'Lead Project Manager'
    }, {
        animal: 'animal-deer',
        photo: 'photo',
        name: 'Tarquin Biscuit-Barrel',
        position: 'Lead Project Manager'
    }, {
        animal: 'animal-eagle',
        photo: 'photo',
        name: 'Tarquin Biscuit-Barrel',
        position: 'Lead Project Manager'
    }, {
        animal: 'animal-duck',
        photo: 'photo',
        name: 'Tarquin Biscuit-Barrel',
        position: 'Lead Project Manager'
    }];

    render() {
        return (
            <section className="home__we-are">
                <h2>Who we are</h2>
                <Bubble size="420px" top="3150px" right="-1700px" speed="0.8"/>
                <Bubble size="800px" top="2150px" left="-1300px" speed="0.5"/>
                <div className="container">
                    <div className="home__we-are__text-wrapper">
                        <p>This an introduction text. It has a fixed size, and a custom line height, so you can
                            experiment </p>
                        <h3>Our Kredo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam
                            eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum
                            condimentum lectus in convallis feugiat. Sed vulputate fringilla felis.</p>
                        <h3>Our Values</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam
                            eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum
                            condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut
                            arcu et dui feugiat scelerisque eu quis diam. </p>
                    </div>
                    <div className="home__we-are__our-images">
                        {
                            this.workers.map((worker, index) => {
                                const animal_src = "assets/img/Who-we-are-" + worker.animal + ".svg";
                                const photoStyles = {
                                    backgroundImage: "url(assets/img/who-we-are-team-member-" + worker.photo + ".jpg)",
                                    backgroundSize: 'contain'
                                };

                                return (
                                    <div className="flip-container" key={'card-' + index}>
                                        <div className="flip-container__flipper">
                                            <div className="flip-container__flipper__front">
                                                <img className="animal-avatar" src={animal_src} alt="worker.animal"/>
                                            </div>
                                            <div className="flip-container__flipper__back" style={photoStyles}>
                                                <div className="flip-container__flipper__back__desc">
                                                    <span>{worker.name}</span>
                                                    <span>{worker.position}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                                // return (
                                //     <div className="card" key={index}>
                                //        <div className="card__front">
                                //            <img className="animal-avatar" src={animal_src} alt="worker.animal"/>
                                //        </div>
                                //         <div className="card__back" style={photoStyles}>
                                //        </div>
                                //     </div>
                                // )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default WeAre;
