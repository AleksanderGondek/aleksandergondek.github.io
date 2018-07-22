module.exports = {
    siteMetadata: {
        title: "Alexander's Blog",
        author: "Aleksander Gondek"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        "gatsby-plugin-typescript",
        {
            resolve: "gatsby-plugin-typography",
            options: {
              pathToConfigModule: "src/typography/global.js",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content`,
                name: "pages",
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: []
            }
        },
    ],
};
