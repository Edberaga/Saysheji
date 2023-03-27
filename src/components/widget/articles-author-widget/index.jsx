import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { WidgetAuthor, Title, Description, Socials } from "./style";

const Author = ({ author }) => {
    return (
        <WidgetAuthor>
            <GatsbyImage
                className="author-image"
                image={getImage(author.image?.src)}
                alt={author.name}
            />
            <Title>{author.name}</Title>
            <Description>{author.description}</Description>
            <Socials>
                {author.socials.map((item) => (
                    <Link key={item.id} to={item.link}>
                        <i className={item.icon}></i>
                    </Link>
                ))}
            </Socials>
        </WidgetAuthor>
    );
};

Author.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string,
        bio: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.shape({
            src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
                .isRequired,
            alt: PropTypes.string,
        }),
        socials: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                icon: PropTypes.string,
                link: PropTypes.string,
            })
        ),
    }),
};

export default Author;
