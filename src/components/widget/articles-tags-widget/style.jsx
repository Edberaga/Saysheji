import styled, { themeGet, device } from "@theme/utils";
export const SidebarWidget = styled.div`
    background-color: #f7faff;
    padding: 30px;
    margin-bottom: 60px;
    border-radius: 15px;
    padding: 20px;
    ${device.large} {
        padding: 50px;
    }
`;
export const Title = styled.h4`
    font-weight: 700;
    margin-bottom: 30px;
`;
export const WidgetTags = styled.ul`
    margin-left: -10px;
    margin-bottom: -10px;
    display: inline-block;
    a {
        color: #02126a;
        display: inline-block;
        padding: 9px 20px;
        margin-bottom: 10px;
        margin-left: 10px;
        background-color: white;
        border-radius: 5px;
        &:hover {
            background-image: ${themeGet("colors.gradient")};
            color: #fff;
        }
    }
`;
