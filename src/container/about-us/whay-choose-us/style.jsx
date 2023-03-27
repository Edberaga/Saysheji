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
    padding: 190px 0px;
    .about-bg {
        position: absolute !important;
        top: 0px;
        right: 0;
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
        margin-right: 70px;
    }
`;
