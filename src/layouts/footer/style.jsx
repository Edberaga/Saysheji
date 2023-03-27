import styled, { themeGet, device, keyframes } from "@theme/utils";
const offset = keyframes`
    0% {
        stroke-dashoffset: 800;
    }
    80% {
        stroke-dashoffset: 0;
    }
    100% {
        stroke-dashoffset: 0;
        fill: #2647c8;
    }
`;
const move = keyframes`
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }

    100% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
`;
export const FooterWrap = styled.footer``;

// Footer Top Css
export const FooterTop = styled.div`
    padding: 80px 0px;
    position: relative;
    background: #0a196f;
    .footer-bg-shape {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
        z-index: 0;
    }
    .path-shape {
        position: absolute;
        top: 165px;
        left: 40px;
        z-index: 0;
        animation: ${move} 1s infinite alternate;
    }
    .path-svg {
        svg {
            max-width: 127px;
            max-height: 305px;
            position: absolute;
            right: 80px;
            bottom: 60px;
        }
    }

    .footer_svg__cls-1 {
        isolation: isolate;
    }
    .footer_svg__cls-2 {
        mix-blend-mode: multiply;
        fill: #fff;
    }
    .footer_svg__cls-3 {
        fill: #ddd;
    }
    .footer_svg__cls-4 {
        fill: url(#linear-gradient-2);
    }
    .footer_svg__cls-5 {
        fill: #e2e9fa;
    }
    .footer_svg__cls-6 {
        fill: #f0f4fc;
    }
    .footer_svg__cls-7 {
        fill: #6e8fe4;
    }

    .footer_svg__cls-8 {
        stroke: #2647c8;
        fill: none;
        stroke-width: 2;
        stroke-dasharray: 800;
        stroke-dashoffset: 800;
        animation: ${offset} linear 5s forwards infinite;
    }
`;

export const FooterRow = styled.div`
    display: flex;
    background: #02126a;
    border-radius: 15px;
    flex-wrap: wrap;
    margin: 0px 0px;

    position: relative;
    ${device.large} {
        flex-wrap: no-wrap;
    }
`;
export const FooterCol = styled.div`
    width: 100%;
    ${device.small} {
        width: 50%;
    }
    ${device.large} {
        flex: 1 0;
        border-right: 1px solid #273581;
        &:nth-of-type(1) {
            max-width: 300px;
            flex: 1 0 100%;
        }
    }
    ${device.xlarge} {
        flex: 1 0;
        &:nth-of-type(1) {
            max-width: 390px;
            flex: 1 0 100%;
        }
    }
    &:last-child {
        border-right: 0px;
    }
`;
export const FooterWidget = styled.div`
    padding: 15px 15px 15px;
    ${device.medium} {
        padding: 50px 30px 0px 20px;
    }
    ${device.large} {
        padding: 50px 30px 40px 20px;
    }
    ${device.xlarge} {
        padding: 50px 30px 70px 50px;
    }
`;

// Footer Bottom Css
export const FooterBottom = styled.div`
    padding: 20px 0px;
    background: #111f73;
    position: relative;
`;
export const CopyrightText = styled.p`
    color: white;
    & > svg {
        width: 15px;
        height: 15px;
        path {
            fill: red;
        }
    }
    i {
        background: ${themeGet("colors.gradient")};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    a {
        font-weight: 900;
        background: ${themeGet("colors.gradient")};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    ${device.medium} {
        padding: 0;
    }
`;
