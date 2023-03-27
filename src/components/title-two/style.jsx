import styled, { device, css } from "@theme/utils";
export const TitleBox = styled.div`
    margin-bottom: 40px;
`;
export const SubTitle = styled.h5`
    font-weight: 700;
    line-height: 1.292;
    text-transform: uppercase;
    font-size: 20px;
    background: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#fc7318),
        to(#feb423)
    );
    background: -webkit-linear-gradient(left, #fc7318 0%, #feb423 100%);
    background: -o-linear-gradient(left, #fc7318 0%, #feb423 100%);
    background: linear-gradient(to right, #fc7318 0%, #feb423 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
`;
export const Title = styled.h2``;
export const ShortDec = styled.p``;
export const DividerBar = styled.span`
    position: relative;
    width: 30px;
    height: 5px;
    display: inline-block;
    border-radius: 5px;
    margin-left: 30px;
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
