import styled, { device, themeGet } from "@theme/utils";
import BrandBg from "../../../data/images/brand-logo/bg.png";
export const BrandSection = styled.section``;
export const BrandTitle = styled.h6`
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
    span {
        font-weight: 900;
        line-height: 2.428;
        font-size: 35px;
        background: ${themeGet("colors.gradient")};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const BrandBox = styled.div`
    background-color: #02126a;
    background-image: url(${BrandBg});
    padding: 50px 20px 70px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 35px;
    ${device.large} {
        padding: 65px 90px 90px;
    }
`;
