import styled, { themeGet, css, device } from "@theme/utils";
export const BlogCardBox = styled.div`
    margin-bottom: 30px;
    background-color: #fff;
    padding: 30px;
    border-radius: 15px;
    transition: all 0.3s ease-in-out;

    ${({ variant }) =>
        variant === "horizontal" &&
        css`
            display: flex;
            flex-direction: column;
        `};
    ${({ variant }) =>
        variant === "vertical" &&
        css`
            display: flex;
            flex-direction: column;
            .blog-thumb {
                max-width: 100%;
                margin-right: 0px;
                margin-bottom: 20px;
            }
            ${device.small} {
                flex-direction: row;
                .blog-thumb {
                    max-width: 140px;
                    margin-right: 20px;
                    margin-bottom: 0;
                }
            }
        `}

    &:hover {
        background-image: -webkit-linear-gradient(
            0deg,
            #02126a 0%,
            #2647c8 100%
        );
        .meta-hover {
            color: #fff;
            a {
                color: #fff;
            }
        }
        h5 {
            background: ${themeGet("colors.gradient")};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;
export const BlogThumb = styled.div`
    background-color: #f7faff;
    overflow: hidden;
    margin-bottom: 20px;
    border-radius: 15px;
`;
export const BlogContent = styled.div``;
export const BlogMeta = styled.div`
    color: #747785;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 10px;
    font-size: 14px;
    position: relative;
    span {
        &:after {
            content: "/";
            padding: 0 5px;
        }
        &:last-of-type {
            &:after {
                display: none;
            }
        }
    }
`;
export const Author = styled.span``;
export const Date = styled.span``;
export const Category = styled.span`
    background: ${themeGet("colors.gradient")};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
export const Title = styled.h5`
    margin-bottom: 0px;
    a {
        color: ${themeGet("colors.primary")};
    }
`;
