import styled, { device, keyframes } from "@theme/utils";

const zoomin = keyframes`
    0% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(0.8);
      }
`;
export const TestimonialSection = styled.section`
    padding-bottom: 140px;
`;
export const TestimonialContentBox = styled.div`
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    padding: 0px 15px 55px;
    ${device.medium} {
        padding: 0px 70px 85px;
    }
`;
export const ShapBgImg = styled.div`
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    margin: 0 auto;
`;
export const ClientsImageBox = styled.div`
    display: none;
    ${device.medium} {
        display: block;
    }
`;
export const ClientsImage = styled.div`
    position: absolute;
    z-index: 4;
    &:nth-of-type(1) {
        top: 0;
        left: 0;
        animation: ${zoomin} 0.9s infinite alternate;
    }
    &:nth-of-type(2) {
        top: 190px;
        left: -115px;
        animation: ${zoomin} 1.3s infinite alternate;
    }
    &:nth-of-type(3) {
        left: 0;
        bottom: 70px;
        animation: ${zoomin} 1.6s infinite alternate;
    }
    &:nth-of-type(4) {
        top: 40px;
        right: 0;
        animation: ${zoomin} 1.9s infinite alternate;
    }
    &:nth-of-type(5) {
        right: -85px;
        bottom: 135px;
        animation: ${zoomin} 2s infinite alternate;
    }
    &:nth-of-type(6) {
        right: 220px;
        bottom: 55px;
        animation: ${zoomin} 2.3s infinite alternate;
    }
`;
