import styled, { device, themeGet } from "@theme/utils";
import BreadcrumbBg from "../../data/images/bread/bg.jpg";
export const PageBreadcrumbWrap = styled.div`
    background-color: #fafafa;
    position: relative;
    padding: 60px 0px;
    background-image: url(${BreadcrumbBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    .shape {
        position: absolute;
        z-index: 1;
    }
    .shape1 {
        top: -54px;
        left: -42px;
    }
    .shape2 {
        top: auto;
        bottom: -54px;
        right: -42px;
    }
    ${device.large} {
        padding: 120px 0px;
        .shape1 {
            top: 0;
            left: 0;
        }
        .shape2 {
            top: auto;
            bottom: 0;
            right: 0;
        }
    }
`;

export const PageTitleContent = styled.div`
    text-align: center;
    .breadcrumb__title {
        color: #fff;
        font-weight: 700;
        line-height: 1.545;
        font-size: 35px;
        font-family: ${themeGet("fonts.heading")};
        ${device.large} {
            font-size: 55px;
        }
    }
    & .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0;
        margin-bottom: 1rem;
        list-style: none;
        justify-content: center;
        ol {
            padding-left: 0;
            list-style: none;
            display: flex;
            align-items: center;
            color: #fff;

            & .breadcrumb__separator {
                margin-right: 10px;
                margin-left: 10px;
            }
            .breadcrumb__link {
                color: #fff;
                font-size: 15px;
                font-weight: 500;
                margin-bottom: 8px;
                &.breadcrumb__link__active,
                &[aria-current="page"] {
                    font-weight: 900;
                    background: ${themeGet("colors.gradient")};
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
    }
`;
