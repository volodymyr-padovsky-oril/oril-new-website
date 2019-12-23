const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

        return config;
    }
};

module.exports = withSass(
    withCSS({
        webpack(config, options) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: "css-loader",
                    options: {
                        limit: 100000
                    }
                }
            });

            return config;
        },
        env: {
            PUBLIC_URL: process.env.PUBLIC_URL,
            REACT_APP_API_HOST: process.env.REACT_APP_API_HOST,
            REACT_APP_SOCKET_API_HOST: process.env.REACT_APP_SOCKET_API_HOST,
            REACT_APP_STRIPE_PUB_KEY: process.env.REACT_APP_STRIPE_PUB_KEY
        }
    })
);