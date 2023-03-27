/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { StyledLink, createStyles } from "./style";

const SocialLink = ({
    children,
    className,
    sx,
    href,
    label,
    dir,
    variant,
    shape,
    bgColor,
    size,
    space,
    border,
}) => {
    const socialProps = {
        css: (theme) =>
            createStyles(
                theme,
                dir,
                variant,
                shape,
                bgColor,
                size,
                space,
                border
            ),
    };
    return (
        <StyledLink
            className={className}
            sx={sx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            {...socialProps}
        >
            {children}
        </StyledLink>
    );
};

SocialLink.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
    href: PropTypes.string.isRequired,
    label: PropTypes.string,
    variant: PropTypes.oneOf(["contained", "outlined", "texted"]),
    shape: PropTypes.oneOf(["square", "rounded-5", "rounded-10", "rounded-15"]),
    dir: PropTypes.oneOf(["horizontal", "vertical"]),
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    bgColor: PropTypes.oneOf(["default", "black", "bgWhite", "transparent"]),
    space: PropTypes.number,
    border: PropTypes.oneOf(["border-left", "border-right", "border"]),
};

SocialLink.displayName = "SocialLink";

export default SocialLink;
