import React from "react";
import App from "next/app";
import {NextSeo} from "next-seo";

const defaultDescription = "One-stop shop for your digital product";

class SEOMetaTags extends App {

  render() {
    const {description, title, url} = this.props;
    return (
        <NextSeo
            openGraph={{
                type: 'website',
                url: 'https://www.example.com/page',
                title: 'Open Graph Title',
                description: 'Open Graph Description',
                images: [
                    {
                        url: 'https://www.example.ie/og-image.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                    }
                ],
            }}
        />
    )
  }

}

export default SEOMetaTags;
