import { Link } from "gatsby";
import PropTypes from "prop-types";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Button from "../../shared/button";
import {
    BlogGridCard,
    BlogGridContent,
    MetaTag,
    MetaDate,
    MetaComments,
    Comments,
    LinkShare,
    Title,
    DescriptionText,
} from "./style";
const BlogCardTwo = ({ date, title, body, slug, thume_image }) => {
    const image = getImage(thume_image);
    return (
        <BlogGridCard>
            <Link to={`/${slug}`} className="blog-grid-thumb">
                <GatsbyImage image={image} alt={title} />
            </Link>
            <BlogGridContent>
                <MetaTag>
                    <MetaDate>
                        <i className="icofont-ui-calendar"></i>{" "}
                        <Link to="/">{date}</Link>
                    </MetaDate>
                    <MetaComments>
                        <Comments>
                            <Link to="/">2 Comments</Link>
                        </Comments>
                        <LinkShare>
                            <Link to="/">Share</Link>
                        </LinkShare>
                    </MetaComments>
                </MetaTag>

                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
                <DescriptionText>{body}</DescriptionText>
                <Button size="medium" path={`/${slug}`} shape="rounded5">
                    Read More
                </Button>
            </BlogGridContent>
        </BlogGridCard>
    );
};
BlogCardTwo.propTypes = {
    date: PropTypes.string,
    thume_image: PropTypes.object,
    title: PropTypes.string,
    body: PropTypes.string,
    slug: PropTypes.string,
};

export default BlogCardTwo;
