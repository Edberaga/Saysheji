const { slugify } = require("../utils/functions");
module.exports = ({ createResolvers }) => {
    const resolvers = {
        Article: {
            // content: {
            //     resolve: async (source, _args, context, info) => {
            //         await context.nodeModel.prepareNodes(
            //             info.parentType,
            //             { parent: { html: true } },
            //             { parent: { html: true } },
            //             [info.parentType.name]
            //         );

            //         const newSource = context.nodeModel.getNodeById({
            //             id: source.id,
            //         });

            //         return newSource.__gatsby_resolved.parent.html;
            //     },
            // },
            tags: {
                resolve: async (source, _args, context, info) => {
                    var result = source.tags.map((item) => {
                        return {
                            title: item,
                            slug: slugify(item),
                        };
                    });
                    return result;
                },
            },
            categories: {
                resolve: async (source, _args, context, info) => {
                    var result = source.categories.map((item) => {
                        return {
                            title: item,
                            slug: slugify(item),
                        };
                    });
                    return result;
                },
            },
            author: {
                resolve: (source, args, context, info) => {
                    const authors = context.nodeModel.getAllNodes({
                        type: `Authors`,
                    });
                    const author = authors.find(
                        (au) => au.name === source.author
                    );
                    return author;
                },
            },
            // excerpt: {
            //     resolve: async (source, _args, context, info) => {
            //         await context.nodeModel.prepareNodes(
            //             info.parentType,
            //             { parent: { excerpt: true } },
            //             { parent: { excerpt: true } },
            //             [info.parentType.name]
            //         );

            //         const newSource = context.nodeModel.getNodeById({
            //             id: source.id,
            //         });

            //         return newSource.__gatsby_resolved.parent.excerpt;
            //     },
            // },
        },
    };
    createResolvers(resolvers);
};
