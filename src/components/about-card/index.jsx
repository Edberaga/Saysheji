import PropTypes from "prop-types";
import { AboutCard, SubTitle, Title, DesText } from "./style";

const AboutUSCard = ({ subTitle, title, description }) => {
    return (
        <AboutCard>
            <SubTitle>{subTitle}</SubTitle>
            <Title>{title}</Title>
            <DesText>{description}</DesText>
        </AboutCard>
    );
};
AboutUSCard.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};
export default AboutUSCard;
