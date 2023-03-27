import styled, { css } from "@theme/utils";

export const StyledSocial = styled.div``;

export const createStyles = (
    theme,
    dir,
    variant,
    shape,
    bgColor,
    size,
    space,
    border
) => css`
    ${dir === "horizontal" &&
    css`
        display: inline-block;
        text-align: center;
        ${space &&
        css`
            margin-right: ${space}px;
            &:last-of-type {
                margin-right: 0;
            }
        `}
    `}
    ${dir === "vertical" &&
    css`
        display: block;
        ${space &&
        css`
            margin-bottom: ${space}px;
            &:last-of-type {
                margin-bottom: 0;
            }
        `}
    `}
    ${variant === "texted" &&
    css`
        color: ${theme.colors.black};
        padding: 0;
        &:hover {
            color: ${theme.colors.primary};
        }
    `}
    
    ${bgColor === "default" &&
    css`
        background-color: ${theme.colors.primary};
        color: #fff;
        &:hover {
            background-color: ${theme.colors.white};
        }
    `}
    ${bgColor === "black" &&
    css`
        background: #2d3135;
        color: ${theme.colors.white};
        &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
        }
    `}
    ${bgColor === "bgWhite" &&
    css`
        background: ${theme.colors.white};
        color: #222;
        &:hover {
            background: #222;
            color: ${theme.colors.white};
        }
    `}
    
    ${bgColor === "transparent" &&
    css`
        background: transparent;
        color: ${theme.colors.white};
        &:hover {
            background: transparent;
            color: ${theme.colors.secondary};
            background: ${theme.colors.gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    `}
    ${shape === "square" &&
    css`
        border-radius: 100%;
    `}
    ${shape === "rounded-5" &&
    css`
        border-radius: 5px;
    `}
    ${shape === "rounded-10" &&
    css`
        border-radius: 10px;
    `}
    ${shape === "rounded-15" &&
    css`
        border-radius: 15px;
    `}
    ${border === "border-left" &&
    css`
        border-left: 1px solid #273581;
    `}
    ${border === "border-right" &&
    css`
        border-right: 1px solid #273581;
    `}
    ${border === "border" &&
    css`
        border: 1px solid #273581;
    `}
    ${size === "lg" &&
    css`
        font-size: 16px;
        height: 60px;
        width: 50px;
        line-height: 60px;
        text-align: center;
    `}
    ${size === "md" &&
    css`
        font-size: 16px;
        height: 40px;
        width: 40px;
        line-height: 40px;
    `}
    ${size === "sm" &&
    css`
        font-size: 14px;
        height: 36px;
        width: 36px;
        line-height: 36px;
    `}
`;

export const StyledLink = styled.a``;
