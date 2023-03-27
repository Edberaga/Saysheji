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
export const FaqSection = styled.section`
    padding-top: 50px;
    padding-bottom: 140px;
    position: relative;
    .faq-bg {
        position: absolute !important;
        top: 0;
        left: 0;
    }
`;
export const FaqImageBox = styled.div`
    margin-bottom: 30px;
    animation: ${move} 0.8s infinite alternate;
    text-align: center;
    ${device.xlarge} {
        margin-left: -180px;
    }
`;
export const FaqContentBox = styled.div`
    z-index: 10;
    position: relative;
    .accordion-item {
        background: #f7faff;
        margin-bottom: 10px;
        border-radius: 15px;
        border: none;
    }
    ${device.large} {
        margin-left: 80px;
    }
`;
