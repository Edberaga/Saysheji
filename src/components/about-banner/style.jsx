import styled from "@theme/utils";
import AboutBg from "../../data/images/about/3.png";
export const AboutBanner = styled.div`
    position: relative;
    padding: 60px 20px;
    background-image: url(${AboutBg});
    background-position: left top;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    z-index: 1;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 100%;
    &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-image: -webkit-linear-gradient(
            90deg,
            #02126a 0%,
            #2647c8 100%
        );
        background-image: -ms-linear-gradient(90deg, #02126a 0%, #2647c8 100%);
        opacity: 0.9;
        z-index: -1;
    }
    .logo {
        display: block;
        margin-bottom: 35px;
    }
`;
export const Title = styled.h3`
    color: #fff;
    font-weight: 700;
    margin-bottom: 20px;
`;
export const DescriptionText = styled.p`
    color: #fc7418;
    a {
        color: #fff;
    }
`;
