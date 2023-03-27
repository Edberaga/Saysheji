import styled, { themeGet, device, css } from "@theme/utils";
import { Link } from "gatsby";

export const createStyles = (theme, color, size, shape, variant) => css`
    padding: 0 30px;
    background: ${theme.colors.gradient};
    color: ${theme.colors.white};
    font-weight: 600;
    font-size: 15px;
    display: inline-block;
    text-align: center;
    &:hover {
        background: linear-gradient(
            to left,
            #fc7318,
            #fe8415,
            #fe9515,
            #fea51a,
            #feb423
        );
    }
    i {
        margin-left: 12px;
    }
    &:focus {
        outline: none !important;
    }

    ${color === "primary" &&
    css`
        background: ${theme.colors.gradient};
        color: ${theme.colors.white};
        border: none;
        &:hover,
        &:focus {
            background: linear-gradient(
                to left,
                #fc7318,
                #fe8415,
                #fe9515,
                #fea51a,
                #feb423
            );
            color: ${theme.colors.white};
            box-shadow: none;
        }
    `}
    ${color === "secondary" &&
    css`
        background: ${theme.colors.secondary};
        color: #fff;
    `}
    ${color === "light" &&
    css`
        background-color: transparent;
        border-color: #fff;
        padding: 10px 20px;
        font-size: 15px;
        min-height: 45px;
        min-width: 150px;
    `}
    ${size === "xsmall" &&
    css`
        border-radius: 19px;
        font-size: 15px;
        line-height: 1.2;
        min-height: 34px;
        min-width: 100px;
    `}
    ${size === "small" &&
    css`
        font-size: 15px;
        min-width: 150px;
        padding: 10px 18px;
        font-width: 500;
        font-size: ${theme.fontSize.body} ${device.small} {
            font-size: 13px;
            min-width: 135px;
            padding: 10px 18px;
        }
        i {
            font-size: 12px;
        }
    `}
    ${size === "medium" &&
    css`
        font-size: 15px;
        min-width: 120px;
        padding: 0px 20px;
        height: 44px;
        line-height: 42px;
    `}
    ${size === "large" &&
    css`
        height: 50px;
        line-height: 48px;
        padding: 0 20px;
        font-size: 14px;
        ${device.large} {
            padding: 0 25px;
            height: 60px;
            line-height: 58px;
            font-size: 16px;
        }
    `}
    ${shape === "rounded" &&
    css`
        border-radius: 0px;
    `}
    ${shape === "rounded5" &&
    css`
        border-radius: 5px;
    `}
    ${shape === "rounded10" &&
    css`
        border-radius: 10px;
    `}
    ${shape === "rounded15" &&
    css`
        border-radius: 15px;
    `}
    ${variant === "outlined" &&
    css`
        background: transparent;
        color: ${theme.colors.primary};
        border: 2px solid #d7d7d7;
        &:hover {
            background: ${theme.colors.primary};
            border: 2px solid ${theme.colors.primary};
            color: #fff;
        }
    `}
    ${color === "outlineDanger" &&
    css`
        border: solid 2px transparent;
        background-image: -webkit-linear-gradient(
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0)
            ),
            linear-gradient(101deg, #fd4485 0%, #ffa38d 100%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        -webkit-box-shadow: 2px 1000px 1px #f7faff inset;
        box-shadow: 2px 1000px 1px #f7faff inset;
        &:hover,
        &:focus {
            border: solid 2px transparent;
            background-image: -webkit-linear-gradient(#fd4485 0%, #ffa38d 100%),
                -webkit-linear-gradient(349deg, #fd4485 0%, #ffa38d 100%);
            box-shadow: none;
            background-origin: border-box;
        }
    `}
    ${color === "outlineWarning" &&
    css`
        border: solid 2px transparent;
        background-image: linear-gradient(
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0)
            ),
            linear-gradient(101deg, #fd6300 0%, #ffe121 100%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        -webkit-box-shadow: 2px 1000px 1px #f7faff inset;
        box-shadow: 2px 1000px 1px #f7faff inset;
        &:hover,
        &:focus {
            border: solid 2px transparent;
            background-image: linear-gradient(
                    rgba(255, 255, 255, 0),
                    rgba(255, 255, 255, 0)
                ),
                linear-gradient(101deg, #fd6300 0%, #ffe121 100%);
            box-shadow: none;
            background-origin: border-box;
        }
    `}
    ${color === "outlinePrimary" &&
    css`
        border: solid 2px transparent;
        background-image: linear-gradient(
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0)
            ),
            linear-gradient(101deg, #505eff 0%, #03bdff 100%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        -webkit-box-shadow: 2px 1000px 1px #f7faff inset;
        box-shadow: 2px 1000px 1px #f7faff inset;
        &:hover,
        &:focus {
            border: solid 2px transparent;
            background-image: linear-gradient(
                    rgba(255, 255, 255, 0),
                    rgba(255, 255, 255, 0)
                ),
                linear-gradient(101deg, #505eff 0%, #03bdff 100%);
            box-shadow: none;
            background-origin: border-box;
        }
    `}
    ${color === "outlineSecondary" &&
    css`
        border: solid 2px transparent;
        background-image: linear-gradient(
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0)
            ),
            linear-gradient(101deg, #b241ff 0%, #fe86ff 100%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        -webkit-box-shadow: 2px 1000px 1px #f7faff inset;
        box-shadow: 2px 1000px 1px #f7faff inset;
        &:hover,
        &:focus {
            border: solid 2px transparent;
            background-image: linear-gradient(
                    rgba(255, 255, 255, 0),
                    rgba(255, 255, 255, 0)
                ),
                linear-gradient(101deg, #b241ff 0%, #fe86ff 100%);
            box-shadow: none;
            background-origin: border-box;
        }
    `}


    ${variant === "iconButton" &&
    css`
        i {
            margin-left: 10px;
            font-size: 22px;
        }
    `}
`;

export const StyledAnchor = styled.a``;

export const StyledLink = styled(Link)``;

export const StyledButton = styled.button``;
