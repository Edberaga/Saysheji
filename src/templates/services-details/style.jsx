import styled, { device } from "@theme/utils";

export const ServicesDetailsArea = styled.section`
    padding: 60px 0;
    ${device.medium} {
        padding: 80px 0;
    }
    ${device.large} {
        padding: 100px 0;
    }
    ${device.xlarge} {
        padding: 120px 0;
    }
    p {
        font-size: 14px;
        margin-top: 20px;
    }
`;
export const ServicesDetailsContent = styled.div`
    ${device.large} {
        padding-right: 50px;
    }
    .row {
        margin-left: -15px;
        margin-right: -15px;
    }
`;
export const ServicesDetails = styled.div``;
export const Thumb = styled.div``;
export const ServicesTitle = styled.h3`
    margin-bottom: 25px;
    margin-top: 25px;
`;
export const ServiceDetailsList = styled.div`
    margin-top: 50px;
    .list-image {
        margin-top: 20px;
        ${device.large} {
            margin-top: 0px;
        }
    }
`;
export const InnerSpace = styled.div`
    margin-top: 50px;
`;
