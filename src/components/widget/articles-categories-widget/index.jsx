import { useStaticQuery, graphql, Link } from "gatsby";
import { flatDeep, slugify, containsObject } from "@utils/functions";
import PropTypes from "prop-types";
import { SidebarWidget, Title, Widgetcategory } from "./style";

const Categories = () => {
    const categoriesQuery = useStaticQuery(graphql`
        query CategoriesQuery {
            allArticle {
                edges {
                    node {
                        categories {
                            slug
                            title
                        }
                    }
                }
            }
        }
    `);

    const categories = categoriesQuery.allArticle.edges;
    const allCategories = flatDeep(
        categories.map((cate) => cate.node.categories)
    );
    let cats = [];
    allCategories.forEach((cat) => {
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
            <Title>Post Category</Title>
            <Widgetcategory>
                {cats.map((cat) => (
                    <li key={cat.slug}>
                        <Link to={`/category/${cat.slug}`}>
                            <i className="icofont-rounded-double-right"></i>{" "}
                            {cat.title}
                        </Link>
                        <span>({cat.count})</span>
                    </li>
                ))}
            </Widgetcategory>
        </SidebarWidget>
    );
};

Categories.propTypes = {
    categories: PropTypes.shape({}),
};

export default Categories;
