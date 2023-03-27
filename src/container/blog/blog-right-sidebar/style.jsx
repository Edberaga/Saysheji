import styled, { device } from "@theme/utils";
export const BlogGridSection = styled.section`
    padding: 150px 0;
`;
export const Aside = styled.aside``;
export const SingleWidget = styled.div`
    background-color: #f7faff;
    padding: 15px;
    margin-bottom: 60px;
    border-radius: 15px;
    ${device.medium} {
        padding: 30px;
    }
    ${device.large} {
        padding: 50px;
    }
    a {
        margin-right: 10px;
        background: #fff;
        color: #333;
        font-weight: 400;
    }
`;
export const WidgetTitle = styled.h3`
    margin-bottom: 30px;
`;
