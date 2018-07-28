module.exports = {
    siteMetadata: {
        author: {
            fullName: "Aleksander Gondek",
            githubProfile: "https://github.com/AleksanderGondek",
            linkedInProfie: "https://www.linkedin.com/in/aleksander-gondek/",
        },
        baseUrl: "https://aleksandergondek.github.io",
        keywords: ["test"],
        shareLinksPrefix: {
            linkedin: "http://www.linkedin.com/shareArticle?mini=true&url=",
            reddit: "http://www.reddit.com/submit?url=",
            twitter: "https://twitter.com/intent/tweet?url=",
            ycombinator:  "https://news.ycombinator.com/submitlink?u=",
        },
        title: "Aleksander's Blog"
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
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                          classPrefix: "language-",
                          inlineCodeMarker: null,
                          aliases: {},
                        },
                    },
                ],
            }
        },
    ],
};
