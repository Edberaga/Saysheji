import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { CaseCard, Thumb, CaseCardContent, Title, Desination } from "./style";
const CaseStudiesGrid = ({ title, thumbImg, category, slug }) => {
    const image = getImage(thumbImg);
    return (
        <CaseCard>
            <Thumb>
                <Link to={`/case-studies/${slug}`}>
                    <GatsbyImage
                        className="case-shap"
                        image={image}
                        alt={title}
                    />
                </Link>
            </Thumb>
            <CaseCardContent>
                <Title>
                    <Link to={`/case-studies/${slug}`}>{title}</Link>
                </Title>
                <Desination>{category}</Desination>
            </CaseCardContent>
        </CaseCard>
    );
};
CaseStudiesGrid.propTypes = {
    slug: PropTypes.string,
    title: PropTypes.string,
    thumbImg: PropTypes.object,
    category: PropTypes.string,
};
export default CaseStudiesGrid;
