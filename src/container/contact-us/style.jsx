import styled, { device } from "@theme/utils";
export const ContactUsSection = styled.section`
    padding: 100px 0;
`;
export const ContactUsCard = styled.div`
    background-color: #f7faff;
    padding: 30px;
    border-radius: 15px;
    ${device.large} {
        padding: 80px;
    }
    .contact-us-title {
        font-size: 25px;
        @media screen and (min-width: 1400px) {
            h2,
            .h2 {
                font-size: 35px;
                line-height: 1;
            }
        }
    }
`;
export const ContactUsinfoList = styled.div`
    margin-top: -20px;
    ${device.medium} {
        margin-top: -50px;
    }
`;
