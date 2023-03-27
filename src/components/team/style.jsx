import styled, { device, themeGet, keyframes } from "@theme/utils";

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Thumb = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 30px;
    .social-hover {
        top: 50%;
        left: 50%;
        display: block !important;
        position: absolute !important;
        transition: all 0.5s;
        transform: translate(-50%, -50%) !important;
        width: 100%;
        text-align: center;
        opacity: 0;
        visibility: hidden;
        .gatsby-image-wrapper {
            overflow: inherit !important;
        }
        img {
            animation: ${rotation} 5s infinite linear;
        }
    }
`;
export const TeamContent = styled.div`
    text-align: center;
    position: relative;
`;
export const Title = styled.h4`
    color: white;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 0.8;
`;
export const Designation = styled.p`
    font-weight: 700;
    line-height: 2.076;
    font-size: 13px;
    text-transform: uppercase;
    color: #fc7418;
`;
export const TeamSocial = styled.ul`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
    opacity: 0;
    visibility: hidden;
`;
export const TeamSocialItem = styled.li`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: linear 0.3s;
`;
export const TeamSocialLink = styled.a`
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 39px;
    height: 39px;
    color: #fff;
    border-radius: 50%;
    &:hover {
        background: #fff;
        color: ${themeGet("colors.primary")};
    }
`;
export const SingleTeam = styled.div`
    margin-bottom: 30px;
    &:hover {
        .social-hover {
            opacity: 1;
            visibility: visible;
        }
        .socail-icon-hover {
            opacity: 1;
            visibility: visible;
        }
        .team-social-item {
            &:nth-of-type(1) {
                top: 85px;
                left: 50%;
                transform: translateX(-50%);
            }
            &:nth-of-type(2) {
                top: 130px;
                left: 40%;
                transform: translateX(-50%);
            }
            &:nth-of-type(3) {
                top: 130px;
                left: 60%;
                transform: translateX(-50%);
            }
        }
    }
`;
