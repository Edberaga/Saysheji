import styled, { device } from "@theme/utils";
export const CaseStudiesDetailsArea = styled.section`
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
        font-size: 15px;
        margin-top: 20px;
    }
`;
export const CaseStudiesDetailsContent = styled.div``;
export const Thumb = styled.div``;
export const CaseClientsCard = styled.div`
    background-color: #f7faff;
    padding: 15px;

    margin-bottom: 65px;
    border-radius: 15px;
    ${device.medium} {
        padding: 70px;
    }
`;
export const CaseClientsCardRow = styled.div`
    background-color: #fff;
    padding: 15px;
    border-radius: 15px;

    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    ${device.medium} {
        padding: 60px 50px;
    }
`;

export const Section = styled.div``;

export const CaseDetailsCol = styled.div`
    max-width: 50%;
    flex: 0 50%;
    padding-right: 20px;
    padding-bottom: 20px;
    ${device.medium} {
        max-width: 33%;
        flex: 0 33%;
    }
    ${device.large} {
        max-width: 20%;
        flex: 0 20%;
    }
    .clients-hr {
        background-image: -webkit-linear-gradient(
            0deg,
            #fc7318 0%,
            #feb423 100%
        );
        background-image: -ms-linear-gradient(0deg, #fc7318 0%, #feb423 100%);
        position: relative;
        display: block;
        width: 20px;
        height: 4px;
        margin-bottom: 15px;
        border-radius: 5px;
        &::before {
            position: absolute;
            left: 30px;
            top: 0;
            background-color: #ecf1fa;
            width: 45px;
            height: 100%;
            content: "";
            border-radius: inherit;
        }
    }
`;
export const CaseDetailsDataTitle = styled.h6`
    margin-bottom: 20px;
`;
export const CaseDetailsDataDes = styled.p``;
export const CaseStudiesTitle = styled.h3``;
