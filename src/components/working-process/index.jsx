import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { Icon, Title } from "./style";
const WorkingProcess = ({ title, working_arrow, icon, level }) => {
    const image = getImage(working_arrow);
    const imageIcon = getImage(icon);
    return (
        <Fragment>
            <GatsbyImage className="arrow-shape" image={image} alt={title} />
            <Icon className="icon">
                <GatsbyImage image={imageIcon} alt={title} />
            </Icon>
            <Title as={level}>{title}</Title>
        </Fragment>
    );
};

WorkingProcess.propTypes = {
    title: PropTypes.string,
    working_arrow: PropTypes.object,
    icon: PropTypes.object,
    level: PropTypes.string,
};

export default WorkingProcess;
