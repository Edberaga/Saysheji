import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { BrandSingleItem, BrandItem } from "./style";
const SingleBrand = ({ brnadAffterImage, brnadBeforeImage, alt }) => {
    const image1 = getImage(brnadAffterImage);
    const image2 = getImage(brnadBeforeImage);
    return (
        <BrandSingleItem href="/">
            <BrandItem className="brandBefore">
                <GatsbyImage image={image1} alt={alt} />
            </BrandItem>
            <BrandItem className="brandAfter">
                <GatsbyImage image={image2} alt={alt} />
            </BrandItem>
        </BrandSingleItem>
    );
};
SingleBrand.propTypes = {
    brnadAffterImage: PropTypes.object,
    brnadBeforeImage: PropTypes.object,
    alt: PropTypes.string,
};
export default SingleBrand;
