import React from 'react';

function NewsItem(img, href, title, isHovered, item) {
    console.log('props', title);
    return (
        <a
            // onMouseEnter={this.toggleHover}
            // onMouseLeave={this.toggleHover}
            href={href.href}
            className="home__our-news__card"
            style={{backgroundImage: `url("/assets/img/${img.img}.png")`}}>
            {/*<img src={item.img} alt=""/>*/}
            {/*{isHovered && <div className="home__our-news__cloud">{title.title}</div>}*/}
            {/*{item.title}*/}
        </a>
    )
}

export default NewsItem;