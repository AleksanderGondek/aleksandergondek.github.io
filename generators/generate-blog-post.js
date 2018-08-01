const fs = require("fs");

const inputRequired = name => {
    return value => (/.+/.test(value) ? true : `${name} is required`);
};

module.exports = plop => {
    plop.setGenerator("Blog Post Generator", {
        prompts: [
            {
                type: "input",
                name: "title",
                message: "Blog post title?",
                validate: inputRequired("title")
            },
            {
                type: "input",
                name: "tags",
                message: "tags? (separate with coma)"
            }
        ],
        actions: data => {
            data.createdDate = new Date().toISOString();
            if (data.tags) {
                data.tags = `tags:\n  - ${data.tags.split(", ").join("\n  - ")}`;
            }
            else {
                data.tags = "tags: []";
            }

            return [
                {
                    type: "add",
                    path: "../content/{{kebabCase title}}.md",
                    templateFile: "templates/blogPost.template"
                }
            ];
        }
    });
};
