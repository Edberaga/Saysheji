import styled, { themeGet, device } from "@theme/utils";
export const TextWidgetBox = styled.div``;
export const AddressUl = styled.ul``;
export const InfoList = styled.li`
    font-weight: 400;
    line-height: 1.687;
    color: #c6c9d8;
    font-size: 16px;
    padding: 10px 0px;
    border-bottom: 1px solid #273581;
    &:first-of-type {
        border-top: 1px solid #273581;
    }
`;
export const InfoLink = styled.a`
    font-size: 16px;
    color: #c6c9d8;
`;
export const Icon = styled.span`
    background: ${themeGet("colors.gradient")};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    display: inline-block;
    margin-right: 30px;
`;
