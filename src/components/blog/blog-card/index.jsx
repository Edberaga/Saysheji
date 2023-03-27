import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    BlogCardBox,
    BlogThumb,
    BlogContent,
    BlogMeta,
    Author,
    Date,
    Category,
    Title,
} from "./style";
const BlogCard = ({ variant, title, author, date, slug, image }) => {
    return (
        <BlogCardBox variant={variant}>
            <BlogThumb className="blog-thumb">
                <Link to={`/${slug}`}>
                    <GatsbyImage image={getImage(image)} alt={title} />
                </Link>
            </BlogThumb>
            <BlogContent>
                <BlogMeta className="meta-hover">
                    <Author>
                        By <Link to="/">{author}</Link>
                    </Author>
                    <Date>
                        <Link to="/">{date}</Link>
                    </Date>
                    <Category>
                        <Link to="/">Digital Marketing</Link>
                    </Category>
                </BlogMeta>
                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
            </BlogContent>
        </BlogCardBox>
    );
};
BlogCard.propTypes = {
    variant: PropTypes.oneOf(["horizontal", "vertical"]),
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.object,
};
BlogCard.defaultProps = {
    variant: "horizontal",
};
export default BlogCard;
