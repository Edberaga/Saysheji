import { useStaticQuery, graphql, Link } from "gatsby";
import { flatDeep, slugify, containsObject } from "@utils/functions";
import PropTypes from "prop-types";
import { SidebarWidget, Title, WidgetTags } from "./style";

const Tags = () => {
    const tagsQuery = useStaticQuery(graphql`
        query TagsQuery {
            allArticle {
                edges {
                    node {
                        tags {
                            slug
                            title
                        }
                    }
                }
            }
        }
    `);

    const tags = tagsQuery.allArticle.edges;
    const allTgs = flatDeep(tags.map((cate) => cate.node.tags));
    let cats = [];
    allTgs.forEach((cat) => {
        const obj = {
            title: cat.title,
            slug: cat.slug,
            count: 1,
        };
        const objIndex = containsObject(obj, cats);
        if (objIndex !== -1) {
            const prevCount = cats[objIndex].count;
            cats[objIndex] = {
                title: cat.title,
                slug: cat.slug,
                count: prevCount + 1,
            };
        } else {
            cats.push(obj);
        }
    });
    return (
        <SidebarWidget>
            <Title>Post Tags</Title>
            <WidgetTags>
                {cats.map((cat) => (
                    <Link key={cat.slug} to={`/tags/${cat.slug}`}>
                        {cat.title}
                    </Link>
                ))}
            </WidgetTags>
        </SidebarWidget>
    );
};

Tags.propTypes = {
    tags: PropTypes.shape({}),
};

export default Tags;
