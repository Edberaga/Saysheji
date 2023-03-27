const { slugify } = require("../utils/functions");

module.exports = ({ node, actions, createNodeId }) => {
    const { createNode, createNodeField } = actions;

    // General Header
    if (node.internal.type === "GeneralJson") {
        createNode({
            id: createNodeId(`General-${node.id}`),
            parent: node.id,
            section: node.section,
            contact_info: node.contact_info,
            menu: node.menu,
            footer: node.footer,
            internal: {
                type: "General",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    // Home & Inner pages
    if (
        node.internal.type === "HomepagesJson" ||
        node.internal.type === "InnerPagesJson"
    ) {
        createNode({
            id: createNodeId(`Page-${node.id}`),
            parent: node.id,
            title: node.title,
            pageType: node.pageType,
            content: node.content,
            internal: {
                type: "Page",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    // Case Studies
    if (node.internal.type === "CaseStudiesJson") {
        createNode({
            id: createNodeId(`CaseStudies-${node.id}`),
            parent: node.id,
            title: node.title,
            slug: slugify(node.title),
            category: node.category,
            clients: node.clients,
            date: node.date,
            budget: node.budget,
            location: node.location,
            excerpt: node.excerpt,
            tagline: node.tagline,
            logo: node.logo,
            images: node.images,
            is_featured: node.is_featured,
            content: node.content,
            internal: {
                type: "CaseStudies",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    // Services
    if (node.internal.type === "ServicesJson") {
        createNode({
            id: createNodeId(`Services-${node.id}`),
            parent: node.id,
            title: node.title,
            slug: slugify(node.title),
            excerpt: node.excerpt,
            className: node.className,
            outlineColor: node.outlineColor,
            images: node.images,
            is_featured: node.is_featured,
            content: node.content,
            internal: {
                type: "Services",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    // Fields create in Grapql file
    if (node.internal.type === "MarkdownRemark") {
        createNode({
            id: createNodeId(`Article-${node.id}`),
            parent: node.id,
            title: node.frontmatter.title,
            image: node.frontmatter.image,
            slug: slugify(node.frontmatter.title),
            date: node.frontmatter.date,
            excerpt: node.excerpt,
            author: node.frontmatter.author,
            quote_text: node.frontmatter.quote_text,
            categories: node.frontmatter.categories,
            tags: node.frontmatter.tags,
            //content: node.rawMarkdownBody,
            internal: {
                type: "Article",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    // Authors
    if (node.internal.type === "AuthorsJson") {
        createNode({
            id: createNodeId(`Authors-${node.id}`),
            parent: node.id,
            name: node.name,
            slug: slugify(node.name),
            image: node.image,
            description: node.description,
            bio: node.bio,
            socials: node.socials,
            internal: {
                type: "Authors",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
};
