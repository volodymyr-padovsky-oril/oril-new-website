const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'css-loader',
                options: {
                    limit: 100000
                }
            }
        });

        return config;
    }
}));

const sitemap = require('nextjs-sitemap-generator');
sitemap({
    baseUrl: 'https://oril.co/',
    pagesDirectory: __dirname + "/pages",
    targetDirectory : 'static/'
});