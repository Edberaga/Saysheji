import styled, { themeGet } from "@theme/utils";
export const widgetTitle = styled.div``;
export const Title = styled.h5`
    color: #fff;
    font-weight: 900;
    position: relative;
    padding-bottom: 30px;
    margin-bottom: 20px;
    &::before,
    &::after {
        position: absolute;
        bottom: 0;
        content: "";
        height: 5px;
        border-radius: 5px;
    }
    &::after {
        background: #e6e9f5;
        width: 15px;
        left: 40px;
    }
    &::before {
        width: 30px;
        left: 0px;
        background-image: ${themeGet("colors.gradient")};
    }
`;
