import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import Button from "../../components/shared/button";
import {
    ServiceCard,
    ServiceIcon,
    RotedAround,
    ServiceContent,
    Title,
    DisText,
} from "./style";
const ServicesItem = ({
    lineImage,
    iconImage,
    title,
    disText,
    actionClass,
    outlineColor,
    slug,
}) => {
    const imageLine = getImage(lineImage);
    const imageIcon = getImage(iconImage);
    return (
        <ServiceCard>
            <GatsbyImage className="line" image={imageLine} alt={title} />
            <ServiceIcon>
                <RotedAround className={actionClass}>
                    <span></span>
                </RotedAround>
                <GatsbyImage image={imageIcon} alt={title} />
            </ServiceIcon>
            <ServiceContent>
                <Title>{title}</Title>
                <DisText>{disText}</DisText>
                <Button
                    size="medium"
                    shape="rounded5"
                    variant="outlined"
                    path={`/services/${slug}`}
                    color={outlineColor}
                >
                    Details +
                </Button>
            </ServiceContent>
        </ServiceCard>
    );
};
ServicesItem.propTypes = {
    slug: PropTypes.string,
    lineImage: PropTypes.object,
    iconImage: PropTypes.object,
    title: PropTypes.string,
    disText: PropTypes.string,
    actionClass: PropTypes.string,
    outlineColor: PropTypes.string,
};
export default ServicesItem;
