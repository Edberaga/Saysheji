import styled, { device } from "@theme/utils";
export const ErrorCard = styled.div`
    text-align: center;
`;
export const PageNotFound = styled.ul`
    margin: -15px;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    ${device.large} {
        margin-bottom: 60px;
    }
`;
export const PageNotFoundItem = styled.li`
    position: relative;
    margin: 5px;
    ${device.large} {
        margin: 15px;
    }
`;
export const Number = styled.span`
    font-weight: 900;
    position: absolute;
    line-height: 1.545;
    color: #fff;
    font-size: 58px;
    display: block;
    margin: auto;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${device.medium} {
        font-size: 128px;
    }
    ${device.large} {
        font-size: 148px;
    }
    ${device.xlarge} {
        font-size: 198px;
    }
`;
export const Title = styled.h2`
    font-size: 38px;
    small {
        font-size: 20px;
    }
    ${device.large} {
        font-size: 68px;
        small {
            font-size: 30px;
        }
    }
`;
export const Description = styled.p``;
