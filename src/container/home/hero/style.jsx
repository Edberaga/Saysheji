import styled, { device, keyframes } from "@theme/utils";

const bounce = keyframes`
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
export const HeroSection = styled.section`
    margin-bottom: 80px;
    position: relative;
    border-top: 1px solid #f0f0f0;
    z-index: 0;
    ${device.large} {
        margin-bottom: 80px;
    }
    ${device.xlarge} {
        margin-bottom: 150px;
    }
    ${device.xxlarge} {
        margin-bottom: 250px;
    }
    img {
        max-width: 100%;
    }
    .shape {
        position: absolute !important;
    }
    .shape1 {
        top: 0;
        left: 0;
        z-index: 3;
    }
    .shape2 {
        top: 0;
        right: 0;
        z-index: 2;
    }
    .particle1 {
        animation: ${bounce} 0.6s infinite alternate;
        z-index: 5;
        display: none !important;
        ${device.small} {
            max-width: 70px;
        }
        ${device.medium} {
            top: 50px;
            max-width: 80px;
            display: block !important;
            z-index: 3;
        }
        ${device.large} {
            top: 20px;
        }
        ${device.xlarge} {
            top: 195px;
            left: 90px;
        }
    }
    .particle2 {
        animation: ${bounce} 0.9s infinite alternate;
        display: none !important;
        z-index: 3;
        ${device.small} {
            max-width: 70px;
            max-width: 140px;
            left: 250px;
        }
        ${device.medium} {
            max-width: 140px;
            left: 250px;
            bottom: auto;
            top: 250px;
        }
        ${device.large} {
            left: 145px;
            max-width: 200px;
        }
        ${device.xlarge} {
            left: 200px;
            display: block !important;
            z-index: 3;
        }
    }

    .hero-img-mobile {
        z-index: 4;
        position: relative;
        display: block;
        ${device.large} {
            display: none !important;
        }
    }
`;
export const HeroImg = styled.div`
    position: absolute;
    right: 165px;
    top: 40px;
    z-index: 3;
    display: none;
    ${device.medium} {
        max-width: 400px;
    }
    ${device.large} {
        max-width: 400px;
        display: block;
    }
    ${device.xxlarge} {
        max-width: 483px;
    }
    ${device.xxxlarge} {
        max-width: 683px;
    }
    .animate-two {
        animation: ${bounce} 0.9s infinite alternate;
        display: none;
        ${device.large} {
            display: block;
        }
        ${device.medium} {
            max-width: 280px;
            left: -40px;
            bottom: -150px;
        }
        ${device.xlarge} {
            max-width: 350px;
            left: -130px;
            bottom: -180px;
        }
        ${device.xxlarge} {
            max-width: 380px;
            left: -120px;
            bottom: -200px;
        }
        ${device.xxxlarge} {
            max-width: 380px;
            left: -150px;
            bottom: -60px;
        }
    }
    .animate-three {
        animation: ${bounce} 0.6s infinite alternate;
        display: none;
        ${device.large} {
            display: block;
        }
        ${device.medium} {
            max-width: 230px;
            bottom: -90px;
            right: -130px;
        }
        ${device.xlarge} {
            max-width: 230px;
            bottom: -90px;
            right: -130px;
        }
        ${device.xxlarge} {
            max-width: 290px;
            bottom: -90px;
            right: -150px;
        }
        ${device.xxxlarge} {
            max-width: 290px;
            bottom: -90px;
            right: -150px;
        }
    }
`;

export const HeroContent = styled.div`
    z-index: 3;
    position: relative;
    margin-top: 60px;
    ${device.large} {
        margin-top: 160px;
    }
    .particle3 {
        animation: ${bounce} 0.6s infinite alternate;
        position: absolute;
        display: none !important;
        ${device.medium} {
        }
        ${device.large} {
            left: 110px;
            max-width: 120px;
            bottom: -20px;
            display: block !important;
        }
        ${device.xlarge} {
            left: 110px;
            bottom: -50px;
        }
    }
    .hero-image-four {
        display: none !important;
        ${device.large} {
            max-width: 120px;
            display: block !important;
        }
    }
`;
export const Title = styled.h1`
    font-weight: 900;
`;
export const Form = styled.form`
    max-width: 470px;
    margin-bottom: 50px;
    z-index: 5;
    position: relative;
    a {
        position: absolute;
        top: 6px;
        right: 6px;
    }
`;
export const Input = styled.input`
    background-color: #fff;
    height: 62px;
    border: 1px solid #eef3ff;
    padding-left: 30px;
    padding-right: 160px;
    border-radius: 8px;
    ${device.large} {
        height: 72px;
        padding-right: 200px;
    }
`;
export const DecText = styled.p`
    color: #5c6179;
    line-height: 1.473;
    font-size: 19px;
    position: relative;
    padding-left: 0px;
    margin-top: 30px;
    margin-bottom: 40px;
    &:after {
        position: absolute;
        content: "";
        left: 0;
        width: 50px;
        height: 3px;
        background: var(--theme-ui-colors-gradient);
        top: 50%;
        display: none;
    }
    ${device.xlarge} {
        padding-left: 70px;
        &:after {
            display: block;
        }
    }
`;
