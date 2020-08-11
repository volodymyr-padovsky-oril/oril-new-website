import React, {Component} from "react";
import {news} from "../../../../lib/news";


class OurNews extends Component {
    render() {
        return (
            <section className="home__our-news">
                <h3>Blog</h3>
                <div className="home__our-news__text">
                    <p className="intro-text">Check out our company updates and tips that our own team follows when building strong products.</p>
                </div>
                <div className="home__our-news__wrapper">
                    {news.map((item, index) => {
                        return (
                            <a
                                href={item.href}
                                className="home__our-news__card"
                            >
                                <img src={`/assets/img/${item.img}.png`} alt={item.img}/>
                                <div className="home__our-news__cloud">{item.title}</div>
                            </a>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default OurNews;
