import React from "react";
import App from "next/app";
import {NextSeo} from "next-seo";

const defaultDescription = "One-stop shop for your digital product";

class SEOMetaTags extends App {

  render() {
    const {description, title, url} = this.props;
    return (
      <NextSeo
        title={title}
        description={description || defaultDescription}
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
