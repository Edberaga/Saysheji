import styled, { device } from "@theme/utils";
export const BrandSingleItem = styled.a`
    transition: all 0.4s;
    display: block;
    position: relative;
    text-align: center;
    padding: 0 10px;
    .brandBefore {
        display: block;
        transition: all 0.4s;
    }
    .brandAfter {
        top: 150%;
        position: absolute !important;
        display: block;
        margin: 0 auto;
        left: 0;
        right: 0;
        transition: all 0.4s;
    }
    &:hover {
        & .brandAfter {
            top: 0%;
        }
        & .brandBefore {
            transform: translateY(-100%);
        }
    }
`;
export const BrandItem = styled.span``;
