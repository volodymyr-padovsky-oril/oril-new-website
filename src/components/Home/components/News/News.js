import React, {Component} from "react";
import {news} from "../../../../lib/news";
import NewsItem from "./components/NewsItem";


class OurNews extends Component {
    constructor(props) {
        super(props);
        this.state = {isHovered: false};
    }

    toggleHover = () => {
        this.setState(prevState => ({isHovered: !prevState.isHovered}));
    };


    render() {
        const {isHovered} = this.state;
        console.log('isHovered', isHovered)
        return (
            <section className="home__our-news">
                <h3>OurNews</h3>
                <div className="home__our-news__text">
                    <p className="intro-text">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.</p>
                </div>
                <div className="home__our-news__wrapper">
                    {news.map((item, index) => {
                        return (
                            <NewsItem
                                hef={item.href}
                                img={item.img}
                                title={item.title}
                                isHovered={isHovered}
                                item={{item}}
                            />
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default OurNews;
