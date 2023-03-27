import styled, { device, keyframes } from "@theme/utils";

const move = keyframes`
    from, 20%, to {
        transform: translateY(0);
    }
    from, 53%, 80%, to {
        transform: translateY(-10px);
    }
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-10px);
    }
`;
export const WhyChooseUsSection = styled.section`
    position: relative;
    padding: 80px 0px;
    .about-bg {
        position: absolute !important;
        top: 0;
        left: 0;
    }
    ${device.large} {
        padding: 100px 0px;
    }
    ${device.xlarge} {
        padding: 100px 0px;
    }
    ${device.xxlarge} {
        padding: 150px 0px;
    }
`;

export const ChooseUsImage = styled.div`
    margin-bottom: 30px;
    animation: ${move} 0.8s infinite alternate;
    text-align: center;
`;

export const ChooseListWrpa = styled.div`
    margin-top: 30px;
`;
export const WhyChooseUsOffset = styled.div`
    position: relative;
    ${device.large} {
        margin-left: 70px;
    }
`;
