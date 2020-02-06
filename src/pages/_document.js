import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head/>
                <head>
                    <meta property="og:title" content="Example title"/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:url" content="http://www.site.com/example"/>
                    <meta property="og:image" content="http://site.com/images/example.jpg"/>
                </head>
                <body>
                <Main/>
                <NextScript/>
                <script type="text/javascript" id="hs-script-loader" async defer
                        src="//js.hs-scripts.com/6728466.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument