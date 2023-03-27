import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { ChooseList, Icon, ChooseListContent, Title, DesText } from "./style";

const ChooseUsList = ({ icon, title, description }) => {
    const iconImage = getImage(icon);
    return (
        <ChooseList>
            <Icon>
                <GatsbyImage image={iconImage} alt={title} />
            </Icon>
            <ChooseListContent>
                <Title>{title}</Title>
                <DesText>{description}</DesText>
            </ChooseListContent>
        </ChooseList>
    );
};

ChooseUsList.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default ChooseUsList;
