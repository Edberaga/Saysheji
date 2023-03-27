import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { SectionBox, Icon, Title, DividerBar } from "./style.";

const SectionTitle = ({
    headingTitle,
    icon,
    iconBg,
    align,
    iconAlign,
    showIcon,
    dividerBg,
    color,
}) => {
    const title = {
        showIcon: showIcon || false,
        iconBg: iconBg || "secondary",
        iconAlign: iconAlign || "center",
        align: align || "center",
        dividerBg: dividerBg || "primary",
        color: color || "primary",
    };
    return (
        <SectionBox align={title.align}>
            {title.showIcon && icon?.src && (
                <Icon iconAlign={title.iconAlign} iconBg={title.iconBg}>
                    <GatsbyImage
                        image={getImage(icon.src)}
                        alt={icon.alt || headingTitle}
                    />
                </Icon>
            )}
            {headingTitle && <Title color={title.color}>{headingTitle}</Title>}
            {title.dividerBg && (
                <DividerBar dividerBg={title.dividerBg}></DividerBar>
            )}
        </SectionBox>
    );
};
SectionTitle.propTypes = {
    headingTitle: PropTypes.string,
    iconBg: PropTypes.oneOf(["primary", "secondary"]),
    align: PropTypes.oneOf(["left", "right", "center"]),
    iconAlign: PropTypes.oneOf(["left", "right", "center"]),
    dividerBg: PropTypes.oneOf(["primary", "secondary"]),
    color: PropTypes.oneOf(["white", "primary"]),
    showIcon: PropTypes.bool,
    icon: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
            .isRequired,
        alt: PropTypes.string,
    }),
};

export default SectionTitle;
