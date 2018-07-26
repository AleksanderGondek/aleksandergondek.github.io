module.exports = {
    siteMetadata: {
        title: "Aleksander's Blog",
        author: "Aleksander Gondek",
        urlPrefix: "https://aleksandergondek.github.io",
        githubUrl: "https://github.com/AleksanderGondek",
        linkedInUrl: "https://www.linkedin.com/in/aleksander-gondek/",
        shareUrls: {
            twitter: "https://twitter.com/intent/tweet?url=",
            reddit: "http://www.reddit.com/submit?url=",
            ycombinator: "https://news.ycombinator.com/submitlink?u=",
            linkedin: "http://www.linkedin.com/shareArticle?mini=true&url="
        }
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
