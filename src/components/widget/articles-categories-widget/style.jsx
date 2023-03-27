import styled, { device } from "@theme/utils";
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
export const Widgetcategory = styled.ul`
    li {
        font-weight: 400;
        background-color: white;
        border: 0px;
        padding: 14px 20px;
        margin-bottom: 10px;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    a {
        i {
            margin-right: 10px;
        }
        span {
        }
    }
`;
