import styled, { device } from "@theme/utils";
export const AboutUsSection = styled.section`
    padding-top: 60px;
    ${device.medium} {
        padding-top: 80px;
    }
    ${device.large} {
        padding-top: 100px;
    }
    ${device.xlarge} {
        padding-top: 150px;
    }
`;
export const AboutThumb = styled.div`
    padding: 55px 10px;
    border: 1px solid #eaedf9;
    background-color: #ffffff;
    border-radius: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100%;
`;
