import React from 'react'
import Head from "next/dist/next-server/lib/head";
import css from './index.scss'
import Link from "next/link";
import Header from "../commons/Header";

function Error() {
    return (
        <>
            <Head>
                <title>ORIL | Error page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta property="og:url" content="https://oril.co"/>
                <meta property="og:title" content="ORIL | Error page"/>
                <meta property="og:type" content="website"/>
                <meta property="og:description"
                      content="ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting."/>
                <meta property="og:image" content="https://oril.co/assets/img/link-logo.png"/>
            </Head>
            <Header/>
            <div className="error-wrapper">
                <div className="empty"></div>
                <div className="error-text-block">
                    <h1>404</h1>
                    <p>Oops! You are looking for something
                        that doesn’t exist
                    </p>
                    <Link href="/">
                        <button className="btn">Go to Home</button>
                    </Link>
                </div>

            </div>
        </>

    )
}

export default Error