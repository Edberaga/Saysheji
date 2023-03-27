import styled, { device } from "@theme/utils";
import ErrorBg from "../../data/images/page-not-found/shape-bg.png";
export const ErrorSection = styled.section`
    background-image: url(${ErrorBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 0px;
    ${device.large} {
        padding: 120px 0px;
    }
    ${device.xlarge} {
        padding: 160px 0px;
    }
`;
