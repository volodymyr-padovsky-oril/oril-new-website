import React, {Component} from "react";
import {news} from "../../../../lib/news";


class OurNews extends Component {
    render() {
        return (
            <section className="home__our-news">
                <h3>Blog</h3>
                <div className="home__our-news__text">
                    <p className="intro-text">Check out our company updates and tips that our own team follows when
                        building strong products.</p>
                </div>
                <div className="home__our-news__wrapper">
                    {news.map((item, index) => {
                        return (
                            <div className="home__our-news__card">
                                <img className="first-img" src={`/assets/img/${item.img}.png`} alt={item.img}/>
                                <img className="second-img" src={`/assets/img/${item.img}-darken.png`} alt={item.img}/>
                                <div className="home__our-news__cloud">{item.title}
                                    <a href={item.href}
                                    >
                                        Read more
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default OurNews;

// <div style={{backgroundImage: "url(assets/img/" + item.img + ".png)"}} className="home__our-news__card">
