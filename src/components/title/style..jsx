import styled, { device, css } from "@theme/utils";

export const SectionBox = styled.div`
    margin-bottom: 40px;
    ${device.medium} {
        margin-bottom: 60px;
    }
    ${device.large} {
        margin-bottom: 80px;
    }
    ${device.xlarge} {
        margin-bottom: 100px;
    }
    ${({ align }) =>
        align === "center" &&
        css`
            text-align: center;
        `};
    ${({ align }) =>
        align === "left" &&
        css`
            text-align: left;
        `};
    ${({ align }) =>
        align === "right" &&
        css`
            text-align: right;
        `}
`;
export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 0px 55px 0px rgb(2 18 106 / 10%);

    ${({ iconBg }) =>
        iconBg === "primary" &&
        css`
            background: #2843b2;
            box-shadow: 0px 0px 55px 0px rgb(2 18 106 / 10%);
        `};
    ${({ iconBg }) =>
        iconBg === "secondary" &&
        css`
            background: #fff;
            box-shadow: 0px 0px 55px 0px rgb(2 18 106 / 10%);
        `};

    ${({ iconAlign }) =>
        iconAlign === "center" &&
        css`
            margin: 0 auto 15px;
        `};
    ${({ iconAlign }) =>
        iconAlign === "left" &&
        css`
            margin: 0 0 15px;
        `};
    ${({ iconAlign }) =>
        iconAlign === "right" &&
        css`
            margin: auto 0 15px auto;
        `}
`;
export const Title = styled.h2`
    ${({ color }) =>
        color === "primary" &&
        css`
            color: var(--theme-ui-colors-heading);
        `};
    ${({ color }) =>
        color === "white" &&
        css`
            color: var(--theme-ui-colors-white);
        `};
`;
export const DividerBar = styled.span`
    position: relative;
    width: 30px;
    height: 5px;
    display: inline-block;
    border-radius: 5px;
    margin: 0px 30px;
    &::before,
    &::after {
        width: 15px;
        height: 100%;
        content: "";
        position: absolute;
        top: 0;
        background: #e6e9f5;
        border-radius: 5px;
    }
    &::before {
        left: -30px;
    }
    &::after {
        right: -30px;
    }

    ${({ dividerBg }) =>
        dividerBg === "primary" &&
        css`
            background-image: linear-gradient(0deg, #fc7318 0%, #feb423 100%);
            &::before,
            &::after {
                background: #e6e9f5;
            }
        `};
    ${({ dividerBg }) =>
        dividerBg === "secondary" &&
        css`
            background-image: linear-gradient(0deg, #fc7318 0%, #feb423 100%);
            &::before,
            &::after {
                background: #02126a;
            }
        `};
`;
