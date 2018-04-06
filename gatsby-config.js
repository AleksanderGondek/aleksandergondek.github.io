module.exports = {
    siteMetadata: {
        title: "Gatsby Default Starter",
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
    ],
};
