import React, {Component, Fragment} from 'react';
import Bubble from '../../components/Bubble';

import './index.scss';

class Home extends Component {

    products = [{
        iconName: 'web',
        content: 'Web'
    }, {
        iconName: 'mobile',
        content: 'Mobile'
    }, {
        iconName: 'io-t',
        content: 'IoT'
    }, {
        iconName: 'blockchain',
        content: 'Blockchain'
    }];

    workers = [{
        animal: 'animal-toucan',
        photo: 'photo'
    }, {
        animal: 'animal-whale',
        photo: 'photo'
    }, {
        animal: 'animal-wolf',
        photo: 'photo'
    }, {
        animal: 'animal',
        photo: 'photo'
    }, {
        animal: 'animal-horse',
        photo: 'photo'
    }, {
        animal: 'animal-toucan',
        photo: 'photo'
    }, {
        animal: 'animal-deer',
        photo: 'photo'
    }, {
        animal: 'animal-eagle',
        photo: 'photo'
    }, {
        animal: 'animal-duck',
        photo: 'photo'
    }];

    render() {
        return (
            <Fragment>
                <main className='main' id='home' onScroll={this.onScroll}>
                    <section className="banner">
                        <div className='container banner'>
                            <div className='wrapper'>
                                <Bubble size='351px' top='115px' left='200px' right='-255px' speed='0.8'/>
                                <Bubble size='470px' top='55px' left='-270px' speed='0.3'/>
                                <img src="assets/img/hero-elefant-notebook-3.png" alt="elefant"
                                     srcSet="assets/img/hero-elefant-notebook-3@2x.png 2x,
                                     assets/img/hero-elefant-notebook-3@3x.png 3x"/>
                            </div>
                            <div className="banner_slogan">
                                <h1>ORIL</h1>
                                <p>One stop shop <br/>
                                    for your digital product</p>
                            </div>
                        </div>
                    </section>
                    <section className="products">
                        <h2>Products We Build</h2>
                        <Bubble size='1300px' top='1000px' left='660px' speed='0.2'/>
                        <Bubble size='320px' top='560px' left='-1300px' speed='0.8'/>
                        <div className='container'>{
                            this.products.map((product, index) => {
                                return (
                                    <a href="/" key={index}>
                                        <img src={"assets/icons/products-" + product.iconName + ".svg"}
                                             alt={product.iconName}/>
                                        {product.content}
                                    </a>
                                )
                            })
                        }
                        </div>
                        <button className='btn'>Featured Products</button>
                    </section>

                    <section className="services">
                        <h2>Services</h2>
                        <Bubble size='420px' top='1550px' left='-650px' speed='0.8'/>
                        <div className='container'>
                            <div className="flex_row">
                                <img src="assets/img/product-development.jpg" alt="product development"
                                     srcSet="assets/img/product-development@2x.jpg 2x,
                                     assets/img/product-development@3x.jpg 3x"/>
                                <div>
                                    <h3>
                                        Product development
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate
                                        diam eu pretium
                                    </p>
                                </div>
                            </div>
                            <div className="flex_row">
                                <img src="assets/img/uxui.jpg" alt=""
                                     srcSet="assets/img/uxui@2x.jpg 2x, assets/img/uxui@3x.jpg 3x"/>
                                <div>
                                    <h3>UX/UI Design</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate
                                        diam eu pretium
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="we_are">
                        <h2>Who we are</h2>
                        <Bubble size='420px' top='3150px' right='-1700px' speed='0.8'/>
                        <Bubble size='800px' top='2150px' left='-1300px' speed='0.5'/>
                        <div className='container'>
                            <div>
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
                            <div className="container">
                                {
                                    this.workers.map((worker, index) => {
                                        const animal_src = 'assets/img/Who-we-are-' + worker.animal + '.svg';
                                        const photoStyles = {
                                            backgroundImage: 'url(assets/img/who-we-are-team-member-' + worker.photo + '.jpg)',
                                        };

                                        return (
                                            <div className="img_wrapper" key={index}>
                                                <div className="bg"></div>
                                                <img className="animal_avatar" src={animal_src} alt="worker.animal"/>
                                                <div className="photo" style={photoStyles}>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default Home
