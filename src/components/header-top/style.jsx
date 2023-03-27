import styled, { device, themeGet } from "@theme/utils";
import slelectimg from "@data/images/icons/arrow-down-white.png";

export const HeaderTop = styled.div`
    background-color: ${themeGet("colors.primary")};
`;

export const HeaderLeft = styled.div`
    background-color: #000;
`;
export const NoticeText = styled.p`
    background: ${themeGet("colors.gradient")};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    ${device.large} {
        padding-left: 60px;
        &:after {
            position: absolute;
            content: "";
            left: 0;
            height: 1px;
            width: 40px;
            background: ${themeGet("colors.gradient")};
            top: 50%;
        }
    }
    ${device.xlarge} {
        padding-left: 120px;
        &:after {
            width: 90px;
        }
    }
`;

export const HeaderTopRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
`;

export const CallToAction = styled.div`
    display: none;
    ${device.small} {
        display: block;
    }
    a {
        color: #fff;
        &:hover {
            background: ${themeGet("colors.gradient")};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;

export const SelectLanguage = styled.div``;

export const FormSelect = styled.ul`
    background: transparent url(${slelectimg}) no-repeat center right 0px;
    & > li {
        padding: 0 20px;
    }
    li:hover {
        & .language-ul {
            opacity: 1;
            visibility: visible;
            top: 100%;
        }
    }
    a {
        padding: 5px 0px;
        display: block;
        font-weight: 400;
        color: #fff;
    }
`;

export const FormSelectList = styled.ul`
    background: #fff;
    width: -webkit-fill-available;
    &.language-ul {
        opacity: 0;
        visibility: hidden;
        // opacity: 1;
        // visibility: visible;
        position: absolute;
        top: 100%;
        width: 100px;
        z-index: 3;
        right: 0;
    }
    li > a {
        padding: 3px 5px;
        display: block;
        color: ${themeGet("colors.primary")};
        &:hover {
            background: ${themeGet("colors.gradient")};
            color: #fff;
        }
    }
`;

export const NavItem = styled.li`
    position: relative;
`;
