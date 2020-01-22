import React from "react";
import App from "next/app";
import {NextSeo} from "next-seo";

const defaultDescription = "ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting."

class SEOMetaTags extends App {

  render() {
    const {description, title, url} = this.props;
    return (
      <NextSeo
        title={title}
        description={description}
        canonical={`https://oril.co${url}`}
        openGraph={{
          type: 'website',
          url: `https://oril.co${url}`,

          title: title,
          description: description || defaultDescription,
          site_name: title,
          images: [
            {
              url: 'https://oril.co/assets/img/link-logo.png',
            }
          ],
        }}
        twitter={{
          site: '@orilsoftware',
          handle: '@orilsoftware',
          cardType: 'summary_large_image'
        }}
        facebook={{
          appId: '114966969850832'
        }}

      />
    )
  }

}

export default SEOMetaTags;
