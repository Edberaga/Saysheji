import styled, { device, themeGet } from "@theme/utils";
export const WidgetAuthor = styled.div`
    background-color: #f7faff;
    padding: 30px;
    margin-bottom: 60px;
    border-radius: 15px;
    text-align: center;
    padding: 20px;
    ${device.large} {
        padding: 50px;
    }
    .author-image {
        margin-bottom: 20px;
    }
`;
export const Title = styled.h5`
    text-transform: capitalize;
    font-weight: 700;
    color: #02126a;
    line-height: 1.25;
    font-size: 20px;
    margin-bottom: 5px;
`;
export const Description = styled.p`
    font-weight: 700;
    color: #fc7418;
    text-transform: uppercase;
    font-size: 13px;
    margin-bottom: 35px;
`;
export const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: white;
        box-shadow: 0px 15px 30px 0px rgb(2 18 106 / 5%);
        color: #02126a;
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        margin: 0 5px;
        &:hover {
            background-image: ${themeGet("colors.gradient")};
            color: #fff;
        }
    }
`;
